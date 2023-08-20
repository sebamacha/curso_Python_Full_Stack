#Las listas se utilizan para almacenar varios elementos en una sola variable.
mylista = ["perro" , "gato", 451 , 487, 4511, 8774]
print(mylista)

#longitud de una lista
print(f'Longitud de la lista {len(mylista)}')

#ver de que tipo de lista es
print(f'Tipo de lista {type(mylista)}')

#También es posible usar el constructor list() al crear una nueva lista.
mylista2 = list(["perro" , "gato", 451 , 487, 4511, 8774])
print(mylista2)

#acceso a los elementos de una lista
print(f'El elemento 0 de la lista es {mylista[0]}')
print(f'El elemento  1 de la lista es {mylista[1]}')
#Indexación negativa
print(f'El elemento -1 de la lista es {mylista[-1]}')
print(f'El elemento -2 de la lista es {mylista[-2]}')
#gama de indices
print(f'Los elementos del índice 3 al 5 de la lista son {mylista[3:5]}')
print(f'Los elementos del índice 3 al final de la lista son {mylista[3:]}')
print(f'Los elementos del índice 0 al final de la lista son {mylista[:5]}')
#Rango de índices negativos
print(f'Los elementos del índice -3 al -5 de la lista son {mylista[-3:-5]}')
print(f'Los elementos del índice -3 al final de la lista son {mylista[-3:]}')
print(f'Los elementos del índice 0 al final de la lista son {mylista[:-5]}')
#Comprobar si el artículo existe
print(f'El elemento "perro" existe en la lista? {mylista.count("perro")}')
print(f'El elemento "gato" existe en la lista? {mylista.count("hipopotamo")}')
#recorrer  una lista y comprobar si esta un elemtento
if "perro" in mylista:
    print("si hay un perro")
#cambiar elementos de la lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista[0] = "licantropo"
mylista[1] = "usandizaga"
print(f'elementos de una lista  cambiados {mylista}')
#cambiar rango de valores en una lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista[3:5] = ["perro" , "gato", 451 , 487, 4511, 8774]
print(f'elementos de una lista  cambiados {mylista}')   
#insertar elementos de una lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.insert(0, "cacatua")
mylista.insert(1, "python")
print(f'elementos de una lista  cambiados {mylista}') 
#agregar elementos al final de la lista 
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.append("mono")
mylista.append("caballo")
print(f'elementos de una lista  cambiados {mylista}')
#insertar un elemento en la segunda y tercera posicion
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.insert(2, "raton")
mylista.insert(3, "cebra")
print(f'elementos de una lista  cambiados {mylista}')
#agregar elementos de otra lista a la lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.extend(mylista2)
print(f'elementos de una lista  cambiados {mylista}')
#agregar cualquier elemento iterable a la lista como una tupla o diccionario
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.extend(["perro" , "gato", 451 , 487, 4511, 8774])
print(f'elementos de una lista  cambiados {mylista}')
#eliminar elementos de una lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.pop()
print(f'elementos de una lista  cambiados {mylista}')
mylista.pop(0)
print(f'elementos de una lista  cambiados {mylista}')
mylista.remove("perro")
#eliminar 1 elemento de la lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.remove("gato")
print(f'elementos de una lista  cambiados {mylista}')
#eliminar primer indice de la lista
print(f'elementos de una lista andes de ser cambiados {mylista}')
mylista.pop(0)
print(f'elementos de una lista  cambiados {mylista}')
#eliminar una lista completa

# print(f'elementos de una lista andes de ser cambiados {mylista}')
# mylista.clear()
# print(f'elementos de una lista  cambiados {mylista}')

#recorrer elementos de una lista con un bucle for
print(f'elementos de una lista recorrido por el bucle for  {mylista}')
for x in mylista:
    print(x)
#reccorer la lista con un bucle for e imprimir su indice
print(f'elementos de una lista recorrido por el bucle for  {mylista}')
for x in range(len(mylista)):
    print(x)
#imprimiendo mi lista con un bucle while
print(f'elementos de una lista recorrido por el bucle while  {mylista}')
x = 0
while x < len(mylista):
    print(x , mylista[x])
    x += 1
#imprimir lista utilizando la compresion de listas
print(f'elementos de una lista recorrido por la compresion de listas  {mylista}')
[print(x) for x in mylista] 
        

    






