# import random
# Craer una función que genere una lista de n elementos
# indicado por parámetros
# los números de los elementos deben estar entre 1 y 10

import random
def lista_aleatoria(n):
    lista = []
    for i in range(n):
        lista.append(random.randint(1,10))
        print(lista)
    return lista
#Una función lambda es una pequeña función anónima.

#Una función lambda puede tomar cualquier cantidad de argumentos, pero solo puede tener una expresión.
x = lambda a : a + 10
print(x(10))

