from collections import Counter
# Counter es una subclase de diccionario capaz
# de realizar cuentas o conteos sobre listas
# o strings. 

numeros = [1,2,3,4,1,2,3,1,2,1]
print(Counter(numeros)) #Counter({1: 4, 2: 3, 3: 2, 4: 1})

print(Counter("palabra")) 


#------------------
from datetime import datetime
# se suele utilizar la librería datetime que incorpora los 
# tipos de datos date, time y datetime para representar fechas 
# y métodos para manejarlas.

dt = datetime.now() # Fecha y hora actual

print(dt) # Imprime fecha y hora actual
print("Año:", dt.year)  # Año
print("Mes:", dt.month) # Mes
print("Dia:", dt.day) 
print("Minutos", dt.minute) 

dt1 = datetime(2023,9,28, 11,23)
print(dt1) #2023-09-28 11:23:00
print(type(dt1))

new_fecha = f'{dt1.year}/{dt1.month}'
print(new_fecha)

# Recibe un objeto fecha y devuelve una cadena que representa la fecha en str.
dt2 = datetime.strftime(dt1 ,"%d/%m/%Y, %H:%M:%S")
print(dt2)
print(type(dt2))

# Recibe un str y devuelve un objeto que representa la fecha en objeto.
fecha_str = '09/02/2022 10:24:00'
dt3 = datetime.strptime(fecha_str, "%d/%m/%Y %H:%M:%S")
print(dt3)
print(type(dt3))
print(dt3.month)

# dt = datetime.now() 
print(dt - dt3)
#--------------------------
import math # Importamos el módulo math
# Este módulo contiene funciones y métodos 
# para manejar números, hacer redondeos, sumatorias, etc.
print(math.e)
print(math.pi)

print(math.floor(3.99))  # Redondeo a la baja (suelo)
print(math.ceil(3.01))   # Redondeo al alta (techo)
print(math.trunc(123.45)) # 123
print(math.pow(2, 3))  # Potencia con flotante 
print(math.sqrt(9))


#-----------------------------
import random
# Flotante aleatorio >= 0 y < 1.0
print(random.random())
# Flotante aleatorio >= 1 y <10.0
print(random.uniform(1,10))
# Entero aleatorio de 0 a 9, 10 excluído
print(random.randrange(10))
# Entero aleatorio de 0 a 100
print(random.randrange(0,101))
# Entero aleatorio de 0 a 100 cada 2 números, múltiplos de 2
print(random.randrange(0,101,2))
# Entero aleatorio de 0 a 100 cada 5 números, múltiplos de 5
print(random.randrange(0,101,5))
# Letra aleatoria
print(random.choice('Hola mundo'))
# Elemento aleatorio
print(random.choice([1,2,3,4,5]))
# Dos elementos aleatorios
print(random.sample([1,2,3,4,5], 2))
lista = [1,2,3,4,5]
random.shuffle(lista) #Barajar y guardar la lista
print(lista)
