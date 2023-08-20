# Son clases en las que se pueden definir tanto métodos
# como propiedades, pero que no pueden
# ser instanciadas directamente. Solamente se pueden
# usar para construir subclases (como si fueran moldes). 

from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod 
    def mover(self):
        pass

    @abstractmethod 
    def emitir_sonido(self):
        print("Animal dice: ",end="")
        

# Herencia
class Gato(Animal):

    # Polimorfismo
    def mover(self):
        print("El gato se mueve.")

    # Polimorfismo
    def emitir_sonido(self):
        super().emitir_sonido()
        print("Miau!") 


class Perro(Animal): 

    def mover(self): 
        print("El perro se está moviendo.")

    def emitir_sonido(self):
        super().emitir_sonido() 
        print("Guau, Guau!")

# No permite crear objetos
# animal1 = Animal()
# print(animal1)



g1 = Gato()
g1.mover()
g1.emitir_sonido()

p1 = Perro()
p1.mover()
p1.emitir_sonido()


