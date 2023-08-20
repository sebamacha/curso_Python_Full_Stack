class Persona:  
   
    def __init__(self, identificacion, nombre, apellido, dni):
        #Constructor de Persona
        self.id = identificacion  # Atributo de instancia
        self.nombre = nombre      # Atributo de instancia
        self.apellido = apellido  # Atributo de instancia
        self.dni = dni            # Atributo de instancia
    
    # Método str:
    def __str__(self):
       return f"ID: {self.id} - DNI: {self.dni} - Nombre completo:{self.apellido} {self.nombre}"
   

# Agregar un nuevo atributi en una clase hijo
# Heredar de la clase padre: Persona
class AlumnoCodo(Persona): 
    """Clase que representa a un alumno de Codo a Codo"""
   
    # Polimorfismo
    # Crear el constructor hijo con los atributos heredados y sumarle el nuevo
    def __init__(self, identificacion, nombre, apellido, dni, curso):
       
       # Invocamos al constructor de la superclase:
        Persona.__init__(self, identificacion, nombre, apellido, dni)
        self.curso = curso
       # agregamos el atributo propio del alumno

    def __str__(self):
       return f"ID: {self.id} - DNI: {self.dni} - Nombre completo:{self.apellido} {self.nombre} - Curso:{self.curso} "
       

# Programa principal
# Instanciar
alumno1 = AlumnoCodo(1, "Belinda", "Polo", 123456, "Python")
print(alumno1)

print(alumno1.curso)
print(alumno1)
