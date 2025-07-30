import init
import csv
import os
import re
import pandas as pd
from bs4 import BeautifulSoup
import requests
from datetime import datetime

class GenerateFile():

    def __init__(self, route, name_file):
        self.route = route
        self.name_file = name_file
        self.general = []

    def set_number(self, file_url, file):
        number = ''
        try:
            HTMLFile = open(file_url, encoding='utf-8')
            index = HTMLFile.read()
            rule = BeautifulSoup(index, 'html.parser')
            if rule.find(class_='caracteristicas'):
                num = rule.find(class_='caracteristicas').get_text()
                number = num.strip()
            else:
                new_file = file.split('_', 1)
                number = new_file[0].upper()
        except:
            print(file)
        return number

    def set_date(self, file):
        date = ''

        try:
            HTMLFile = open(file, encoding='utf-8')
            index = HTMLFile.read()
            rule = BeautifulSoup(index, 'html.parser')
            if rule.find_all(class_='caracteristicas'):
                dat = rule.find_all(class_='caracteristicas')[1].get_text()
                date = dat.strip().replace("-", "/")
                print(date)
                if len(date) == 8:
                  date = date[0:6] + "20" + date[6:8]

                # Suponiendo que el formato de la fecha en el HTML es 'dd/mm/yyyy'
                date_obj = datetime.strptime(date, '%d/%m/%Y')
                # Convertir la fecha al formato 'mm/dd/yyyy'
                date = date_obj.strftime('%m/%d/%Y')
            else:
                date = ''
        except:
            print(file)

        return date

    def set_name(self, file_url, file):
        new_title = ''
        try:
            HTMLFile = open(file_url, encoding='utf-8')
            index = HTMLFile.read()
            rule = BeautifulSoup(index, 'html.parser')
            if rule.find('h1'):
                name = rule.find('h1').get_text()
                new_title = name.strip()
            else:
                new_file = file[:-5]
                new_file = new_file.replace("_", " ")
                new_title = new_file.title()
        except:
            print(file)
        return new_title

    def set_category_name(self, item):
        item = item.replace('_', ' ')
        item = item.upper()
        return item

    def set_tags(self, root, result_new):
        array_file = list(map(str.strip, root.split('/')))
        for item in array_file:
            if item != '.' and item != 'content' and item != 'Norma' and item != 'Especificacion':
                item = self.set_category_name(item)
                result_new.append(item)
        return result_new

    def replace_name(self, search_text, replace_text, rule):
        texts_enel = rule.find_all(text = re.compile(search_text))
        for comment in texts_enel:
            print(comment)
            fixed_text = comment.replace(search_text, replace_text)
            comment.replace_with(fixed_text)

    def data_generate(self):
        notlinks = []
        for root, dirs, files in os.walk(self.route):
            for file in files:
                if file.endswith(".html"):
                    route = root + os.sep + file
                    file_route = os.path.normpath(route)
                    HTMLFile = open(file_route, encoding='utf-8')
                    index = HTMLFile.read()
                    rule = BeautifulSoup(index, 'html.parser')

                    self.replace_name('ENEL CODENSA', 'Enel Colombia', rule)
                    self.replace_name('Enel Codensa', 'Enel Colombia', rule)
                    self.replace_name('CODENSA', 'Enel Colombia', rule)
                    self.replace_name('codensa', 'Enel Colombia', rule)

                    headings = rule.find('ul', class_="headings")

                    if headings:
                        headings.decompose()

                    externallinks = rule.find_all('a', class_="externalLink")

                    for link in externallinks:
                        value = link.get_text();

                        if not 'glosarioLink' in link['class']:
                            if(value):
                                data = self.run_query(value.strip())
                                if data:
                                    print(value)
                                    for record in data:
                                        print(record['Link'])
                                        link['href'] = record['Link']
                                else:
                                    print(f'no data para este ID {value.strip()}')
                                    value_strip = value.strip()
                                    value_nospace = value_strip.replace(" ","")
                                    data = self.run_query(value_nospace)
                                    if data:
                                        print(value)
                                        for record in data:
                                            print(f'se econtro un valor ID sin espacios: {record["Link"]}')
                                            link['href'] = record['Link']
                                    else:
                                        value_noline = value_strip.replace("-","")
                                        data = self.run_query(value_noline)
                                        if data:
                                            print(value)
                                            for record in data:
                                                print(f'se econtro un valor ID sin linea: {record["Link"]}')
                                                link['href'] = record['Link']
                                        else:
                                            if not value_noline in notlinks:
                                                notlinks.append(value_noline)
                                                print(notlinks)

                            else:
                                print('no value')

                    imagenes = rule.find_all('img')

                    for imagen in imagenes:
                        src = imagen['src']
                        caracter = '../../'
                        caracter2 = '../../../'
                        caracter3 = '../../../../'
                        uri = 'http://likinormas.micodensa.com/'

                        if caracter3 in src:
                            nueva = src.replace("../../../../", "/sites/default/files/")
                            #print(f"Cadena con caracter: {nueva}")
                        elif caracter2 in src:
                            nueva = src.replace("../../../", "/sites/default/files/")
                            #print(f"Cadena con caracter 2: {nueva}")
                        elif caracter in src:
                            nueva = src.replace("../../", "/sites/default/files/")
                            #print(f"Cadena con caracter 3: {nueva}")
                        elif uri in src:
                            nueva = src.replace("http://likinormas.micodensa.com/", "/sites/default/files/")
                            #print(f"Cadena con uri: {nueva}")
                        else:
                            nueva = src

                        imagen['src'] = nueva

                    my_glossary = rule.find_all(class_="glosarioLink")

                    for element in my_glossary:
                        element['class'] = 'externalLink glosarioLink use-ajax'
                        element['data-dialog-type'] = 'modal'
                        data_words = pd.read_csv('./content/Glosario/glosario_palabras.csv')
                        words = data_words['Name'].tolist()

                        for word in words:
                            if word.lower() == element.text.lower():
                                element['href'] = data_words.loc[data_words['Name'] == word, 'Enlace'].item()

                    with open(file_route, "w", encoding = 'utf-8') as file_write:
                        file_write.write(str(rule.prettify()))

                    result_new = []
                    result_new.append(self.set_number(file_route, file))
                    result_new.append(self.set_name(file_route, file))
                    result_new.append(self.set_date(file_route))
                    result_new = self.set_content(result_new, file_route)
                    result_new = self.set_tags(root, result_new)
                    self.general.append(result_new)

    def set_content(self, result_new, file):
        try:
            HTMLFile = open(file, encoding='utf-8')
            index = HTMLFile.read()
            rule = BeautifulSoup(index, 'html.parser')
            for data in rule(['script']):
                data.decompose()
            content = rule.find(class_="search_box").decompose() if rule.find(class_="search_box") else ''
            content = rule.find(class_="footer").decompose() if rule.find(class_="footer") else ''
            content = rule.find(class_="categoria").decompose() if rule.find(class_="categoria") else ''
            content = rule.find(class_="lateral_der_articulo").decompose() if rule.find(class_="lateral_der_articulo") else ''
            content = rule.find('h1').decompose() if rule.find('h1') else ''
            content = rule.find(class_="ocultar").decompose() if rule.find(class_="ocultar") else ''
            content = str(rule.find(class_="contenido")) if rule.find(class_="contenido") else str(rule)
            result_new.append(content)
        except:
            print(file)
        return result_new

    def export_file(self, columms):
        with open(str(self.name_file), 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(columms)
            for item in self.general:
                writer.writerow(item)

    def generate_file(self, columns):
        try:
            self.data_generate()
            self.export_file(columns)
            print("archivo " + self.name_file + " generado")
        except Exception as e:
            print("error en la generación " + e)

    def run_query(self, value):
        response = requests.get(f'http://localhost/normas-especificaciones', params={'title': value})

        if response.status_code == 200:
            print("Succesful connection with API.")
            print('-------------------------------')
            data = response.json()
            #print(data)
            return data
        elif response.status_code == 404:
            print("Unable to reach URL.")
        else:
            print("Unable to connect API or retrieve data.")
