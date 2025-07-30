from classFile import GenerateFile

normas = GenerateFile("./content/Norma", "normas.csv")
normas.generate_file(["numero","nombre","fecha","contenido","categoria","sub_categoria"])

# especification = GenerateFile("./content/Especificacion", "especifications.csv")
# especification.generate_file(["numero","nombre","fecha","contenido","categoria"])
