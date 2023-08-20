from clase_cliente import Cliente

""" Ejemplo comunicación entre clases:
            Clases: Cliente-Banco
            crear los clientes en init
            operar
            depositos_totales
            crear objeto banco
            acceder a los métodos.
"""

class Banco:

    def __init__(self):
        # Crear a los objetos clientes serán los atributos
        self.cliente1 = Cliente("Julio")
        self.cliente2 = Cliente("Mónica")
        self.cliente3 = Cliente("Lolo")


    def operar(self):
        self.cliente1.depositar(4500)
        self.cliente2.depositar(7580)
        self.cliente3.depositar(2700)
        self.cliente1.extraer(2000)
        self.cliente2.extraer(2000)
        self.cliente3.extraer(2000)

    def depositos_totales(self):
        """ Depósitos totales del banco """
        monto_total = self.cliente1.monto + self.cliente2.monto +self.cliente3.monto
        print(f'El monto total disponible en el banco es: {monto_total}')


# Instanciar
banco_codo = Banco()
banco_codo.operar()
banco_codo.depositos_totales()

    



