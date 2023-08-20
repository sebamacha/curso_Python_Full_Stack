# Estructura de una función 
# sin y con parámetros
def saludar ():
  print("Hola Mundo")
  
  """
  Funcion que no posse ninguna entrada solo salida hola mundo
  """
  
saludar()

#saludo personalizado
def saludar_by_name(name):
  print(f'Hola soy {name}')
nombre = str(input("ingrese su nombre  "))
saludar_by_name(nombre)







# Parámetros por defecto

def sumar (num1 = 0, num2 = 0): #declara valor cero por si no se ingresan los 2 valores y no se rompa la estructra de la funcion
#recibe los valores por parametros y su salida sera la suma de los dos 
  
  return num1 + num2
print(sumar(10,5))

sumatoria = sumar(100,80)
print(f'resultado de las nueva sumatoriaes {sumatoria}')

sumando = sumar(180,322)
print(f'resultado de sumando es {sumando}')

#funcion trabajada con listas 
def multiplicar(numero, cantidad):
  lista = []
  for i in range(cantidad):
    multiplicacion = numero * i
    lista.append(multiplicacion)
  
  return lista
resultado_lista = multiplicar(6,10)
print(resultado_lista)
 



# Función lambda, funcion anonima de una sola que se utiliza para funciones simple que no se va a usar muchos 
# lambda parámetro: operación
# es par?, cuadrado

es_par = lambda num: num%2 == 0
print(es_par(4))

cuadrado = lambda num: num**2
print(cuadrado(4))






# Función map(función, lista) funcion nativa de python
# Convertir a list()

pares = [2,4,6,8,10,12,14,16,18,20]
resultado_cuadrado = list(map(cuadrado, pares))
print(resultado_cuadrado)
#se puede incluir con lambda 
resultado_cuadrado = list(map(cuadrado = lambda num: num**2))
print(resultado_cuadrado)

#argumentos arbitrarios

def my_function(*kids):
  print("The youngest child is " + kids[i])

my_function("Emil", "Tobias", "Linus")
