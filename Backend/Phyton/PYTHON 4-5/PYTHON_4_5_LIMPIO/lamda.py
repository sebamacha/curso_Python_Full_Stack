#Una función lambda es una pequeña función anónima.

#Una función lambda puede tomar cualquier cantidad de argumentos, pero solo puede tener una expresión.
x = lambda a : a + 10
print(x(10))

#Las funciones Lambda pueden tomar cualquier número de argumentos:
x = lambda a, b : a * b
print(x(5, 6))
x = lambda a, b, c : a + b + c
print(x(5, 6, 2))
#El poder de lambda se muestra mejor cuando los usa como una función anónima dentro de otra función.

#Digamos que tiene una definición de función que toma un argumento, y ese argumento se multiplicará con un número desconocido:

def myfunc(n):
  return lambda a : a * n

#Use esa definición de función para hacer una función que siempre duplique el número que envía:

def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)

print(mydoubler(11))
#O use la misma definición de función para hacer una función que siempre triplique el número que envía:

def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(3)

print(mydoubler(11))