"""
    Ejemplo: Programación Orientada a Objetos
    Estructura de la clase Perro.
    Programa: Calcula la edad real 
    de un perro.
"""

class Perro:
    años = [1,2,3,4,5,6,7,8,9,10,11,12]
    pequeño = [20,28,32,36,40,44,48,52,56,60,64,68]
    mediano = [18,27,33,39,45,51,57,63,69,75,81,87]
    grande = [16,22,31,40,49,58,67,76,85,94,103,112]

    #Constructor
    def __init__(self, nombre, edad, altura):
        self.nombre = nombre
        self.edad = edad
        self.altura = altura.lower()
        self.trucos = []
        
    # Método para agregar truco
    def agregar_truco(self, truco):
        self.trucos.append(truco)

    # Mostrar datos del objeto
    def __str__(self): 
        return f"Nombre: {self.nombre}, edad: {self.edad}, truco:{self.trucos}, altura:{self.altura}"

    # Lógica para calcular valor real
    def mostrar_edad_real(self):
        print(f"La edad real de {self.nombre} es: ",end="" )
        
        for i in self.años:
            if self.edad == i:
                if self.altura == "pequeño":
                    print(self.pequeño[i-1], "años")
                
                elif self.altura == "mediano":
                    print(self.mediano[i-1], "años")

                elif self.altura == "grande":
                    print(self.grande[i-1], "años")

                             
if __name__=="__main__":
    
    # Programa principal   
    
    # Crear el objeto perro_1        
    perro_1 = Perro("Oreo", 5, "GRANDE")
    
    # Agregar truco
    perro_1.agregar_truco("Caminar en dos patas") 
    
    # Mostrar los información contenida en el objeto perro_1. Invocando al método __str__
    print(perro_1)

    # Mostrar la edad real del perro
    perro_1.mostrar_edad_real()
    input("Pulse enter para salir")