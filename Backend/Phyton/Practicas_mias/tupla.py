#Los elementos de tupla están ordenados, no se pueden modificar y permiten valores duplicados y y de diferentes variables.

#Los elementos de tupla están indexados, el primer elemento tiene índice [0], el segundo elemento tiene índice, [1]etc.

ejemplotupla = ("perro" , "gato" , "chivo" , "elefante" , "caballo",  "vaca" , True, False, 15, 88, 1500, -500 , -4)
print(f' ests es un ejemplo de tupla {ejemplotupla}' )

#longitud de una tupla
print(f'ver la longitud de una tupla {len(ejemplotupla)}')

#Desde la perspectiva de Python, las tuplas se definen como objetos con el tipo de datos 'tupla
print(f'esta es una tupla {type(ejemplotupla)}')

#acceder a elementos de la tupla
print(f'indice 2 de la dupla {ejemplotupla[2]}')
print(f'ultimo indice  de la tupla {ejemplotupla[-1]}')
print(f'penultimo indice de la tupla {ejemplotupla[-2]}')
print(f'gama de indice de la tupla del 2 al 5 {ejemplotupla[2:5]}')


#Para determinar si un elemento específico está presente en una tupla, use la in palabra clave:

if "chivoooo" in ejemplotupla:
  print("si!!! 'chivo ' se encuentra en la tupla")

#cambiarvalores es INMUTABLE  para cambiar valores se debe pasar a lista y luego de vuelta a tupla
#vonvertir la tupla a lista")
listaa = list(ejemplotupla)
#"una vez convertida a lista se agrega elemento o quita")
listaa.append("computadora")
#se vuelve a convertir a tupla
ejemplotupla = tuple(listaa)
print(ejemplotupla)

#desempaquetado de tupla 
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)

#recorrer los elementos de la tupla haciendo referencia a su número de índice.Utilice las funciones range()y len()para crear un iterable adecuado.

for i, elemento in enumerate(ejemplotupla):
    print(f"Índice: {i}, Valor: {elemento}")
    
#bucle while 
i = 0

while i < len(ejemplotupla):
    print(f"Índice: {i}, Valor: {ejemplotupla[i]}")
    i += 1

#UNIR TUPLAS 
tupla2 = ( 45,85,87,98,41,14,True, False, "Prueba") 
unir = ejemplotupla + tupla2
print(unir)   

#El método index se utiliza para encontrar el índice de la primera aparición de un elemento en la tupla
# Obtener el índice de la primera aparición de 'a'
indice = ejemplotupla.index(88)
print(indice)  # Salida: 0

#El método count se utiliza para contar cuántas veces aparece un elemento en la tupla.
conteo = ejemplotupla.count(88)
print(conteo)  # Salida: 