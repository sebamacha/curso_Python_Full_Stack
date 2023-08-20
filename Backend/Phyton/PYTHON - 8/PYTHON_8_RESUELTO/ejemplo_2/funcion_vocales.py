def vocales(nombre):
    """ Recibe nombre y retorna la 
    cantidad de vocales."""
    lista_vocales = ["a","e", "i", "o", "u"]

    try: 
        contar = 0
        for letra in nombre:
            if letra in lista_vocales:
                contar += 1
    
    except  Exception as e:
        print(type(e).__name__)

    return contar

