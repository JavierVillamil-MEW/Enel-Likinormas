## PROYECTO PYTHON

1. Crear un entorno virtual (virtualvenv)

> python -m venv venv

2. Ejecutar el comando para instalacion de las librerias:

> pip install -r requirements.txt

3. Descargar el contenido actualizado del sitio web de likinormas

> wget -mpEk https://likinormas.micodensa.com/

4. Con el contenido generado debe pasar las carpetas: (Norma, Especificacion) y debe situarlas en la carpeta (content) de la raiz del proyecto de python


5. Debe solicitar las palabras del glosario actualizadas o utilizar el archivo de glosario situado en la carpeta content/Glosario

- En caso de obtener un nuevo archivo debe subirlo en la siguiente ruta:
  https://dev-enel-likinormas.ariadna.co/feed/1/edit?destination=/admin/content/feed


- Luego debe descargar el csv desde el siguiente reporte de drupal
  https://dev-enel-likinormas.ariadna.co/admin/glosario


- Una vez cuente con el archivo debe situarlo en la carpeta (content/Glosario)


6. Una vez tenga todo lo anterior puede ejecutar el archivo:

> python classFile.py

7. Debe esperar, hasta que le genere dos archivos en la raiz del proyecto:

- especifications.csv

- normas.csv

8. Estos archivos se debe cargar en el sitio web en el respectivo feeds para cada tipo de documento:

- Especificaciones: https://dev-enel-likinormas.ariadna.co/feed/3/edit?destination=/admin/content/feed


- Normas: https://dev-enel-likinormas.ariadna.co/feed/2/edit?destination=/admin/content/feed

9. Revisar que el contenido se haya generado correctamente en el sitio de drupal
