print("Mi Calculadora (^_^)")
# Empezar aquí la resolución del ejercicio
while True:
  print("CALCULADORA: Ingrese 2 numeros y luego seleccione la operacion a realizar: \n 1- SUMA \n 2- RESTA \n 3- MULTIPLICACION \n 4- DIVISION \n 5- SALIR. ")
  numero_1 = float(input("Ingrese el primer numero: \n"))
  numero_2 = float(input("Ingrese el segundo numero: \n"))

  operacion = input("Seleccione una operacion: \n")
  
  
  if operacion == "1":
    suma = numero_1 + numero_2
    resultado = suma
    print(resultado)
    break
  elif operacion == "2":
    resta = numero_1 - numero_2
    resultado = resta
    print(resultado)
    
  elif operacion == "3":
    multiplicacion = numero_1 * numero_2
    resultado = multiplicacion
    print(resultado)
    
  elif operacion == "4":
    division = numero_1 / numero_2
    resultado = division
    print(resultado)
   
  elif operacion == "5":
    print("Apagado.")
    break
  else:
    print("Error. Vuelva a intentarlo.")