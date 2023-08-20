class Padre: # Superclase
    profesion = ""
   
    def __init__(self):
        self.apellido = "Volpin"


    def llevar(self):
       print("Papá me lleva al colegio.")


# Herencia
# Agregando atributos a la clase hijo
class Hijo(Padre): # Subclase
   
   #Constructor del hijo
    def __init__(self, nombre):

        # Informar al Padre que quiero más atributos
        Padre.__init__(self, nombre)
        self.nombre = nombre # Agregar el atributo

    
    def estudiar(self):
       print("Estoy en el colegio.")
    

# Instanciar
hijo1 = Hijo("Ramón")

# Acceso al método llevar
print(hijo1.apellido)
hijo1.llevar()
hijo1.estudiar()
print(hijo1.nombre)

