# Encapsulación: Atributos protegidos
# se refiere al ocultamiento de los atributos 
# o métodos de una clase al exterior, para que no se puedan
# acceder ni modificar desde fuera.

# Decorador: setter permite crear métodos que permiten 
# modificar el valor de un atributo privado. 

class Bebida: 

    # Constructor
    def __init__(self, sabor):
        
        #self.bebida = sabor
        # Encapsulado
        self.__bebida = sabor

    # Mostrar el contenido de un atributo encapsulado
    @property
    def bebida_encapsulada(self):
        return f'La bebida es de sabor {self.__bebida}'
    
    # Modiificar un atributo encapsulado
    @bebida_encapsulada.setter
    def bebida_encapsulada(self, sabor):
        self.__bebida = sabor


# Instanciar
bebida1 = Bebida("Limón")
#print(bebida1.bebida) 
#print(bebida1.__bebida)
print(bebida1.bebida_encapsulada)

bebida1.bebida_encapsulada= "Pomelo"
print(bebida1.bebida_encapsulada)