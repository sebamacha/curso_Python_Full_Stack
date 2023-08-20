class Cliente:

    # Constructor
    def __init__(self, nombre):
        self.nombre = nombre
        self.monto = 0


    def depositar(self,cantidad):
        """ Recibe una cantidad para almacenar en monto"""
        #self.monto = self.monto + cantidad
        self.monto += cantidad


    def extraer(self, cantidad):  
        """ Recibe una cantidad para restar a monto"""
        #self.monto = self.monto - cantidad
        self.monto -= cantidad


    def retornar_monto(self):
        """No recibe parámetro devuelve el saldo disponible"""
        return self.monto


    # Mostrar info del objeto
    def __str__(self):
        return f'Cliente:{self.nombre} tiene un monto disponible de {self.monto}'
        

    #  Eliminar cliente
    def __del__(self):
        print(f'Cliente:{self.nombre} eliminado')


    def imprimir(self):
        print(f"{self.nombre} tiene depositado la suma de {self.monto}")
