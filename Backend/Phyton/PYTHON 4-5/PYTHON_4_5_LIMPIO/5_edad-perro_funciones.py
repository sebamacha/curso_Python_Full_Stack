"""
    Ejemplo: Programación secuencial.
    Estructura basada en funciones.
    Programa: Calcula la edad real 
    de un perro.
"""

def agregar_truco():
    trucos = []

    try:
        cantidad_truco = int(input("Cuántos trucos tiene su perro:"))

        if cantidad_truco !=0:
            for i in range(cantidad_truco):
                truco = str(input("Ingrese trucos del perro: "))
                trucos.append(truco)
        else:
            truco_agregado= agregar_truco("No tiene trucos")
    
    except:
        print("Valor ingresado no válido, intente nuevamente:")
        cantidad_truco = int(input("Cuántos trucos tiene su perro:"))

    return trucos

def mostrar_info_perro(info):
    print(f"Nombre: {info[0]}, edad: {info[1]} años,  altura:{info[2]}, truco:{info[3]}")


def mostrar_edad_real(info):
    
    años = [1,2,3,4,5,6,7,8,9,10,11,12]
    pequeño = [20,28,32,36,40,44,48,52,56,60,64,68]
    mediano = [18,27,33,39,45,51,57,63,69,75,81,87]
    grande = [16,22,31,40,49,58,67,76,85,94,103,112]
    
    print(f"La edad real de {info[0]} es: ",end="" )

    for i in años:
        if info[1] == i:
            if info[2] == "pequeño":
                print(pequeño[i-1], "años")
            
            elif info[2] == "mediano":
                print(mediano[i-1], "años")

            elif info[2] == "grande":
                print(grande[i-1], "años")


if __name__=="__main__":
    # Programa principal
    
    # Datos del perro
    info_perro = ["Oreo", 5, "grande"]
    
    # Agregar truco
    trucos = agregar_truco()
    info_perro = ["Oreo", 5, "grande", trucos]
    
    # Mostrar los información del perro
    mostrar_info_perro(info_perro)
    
    # Mostrar la edad real del perro
    mostrar_edad_real(info_perro)
    input("Pulse enter para salir")
