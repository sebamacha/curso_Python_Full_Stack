""" Ejemplo de errores, solución con try and except"""
# Ejemplo 1:
# Excepción
#print(2 + "2")

# MANEJO DE EXCEPCIONES
# Solucionar
try: 
    print(2 + "2")
except:
    print("Hubo un error")  

#-----------------------------
try: 
    print(2 + "2")

except Exception as e:
    print(type(e).__name__)

#------------------------------------
# Ejemplo 2: Informar el error con try and  except Exception as e
# Error
# a = 4
# b = 0
# print(a/b)


a = 4
b = 0
try:
    print(a/b)

except Exception as e:
    print(type(e).__name__)



#----------------------------------
# Ejemplo 3:
try:
    numero = float(input("Ingrese un número divisor: "))
    print(5/numero)
    
except TypeError:
    print("No se puede dividir el número entre una cadena")
except ValueError:
    print("Debes introducir una cadena que sea un número")
except ZeroDivisionError:
    print("No se puede dividir por cero, prueba otro número")
except Exception as e:
    print("Ha ocurrido un error no previsto", type(e).__name__)

