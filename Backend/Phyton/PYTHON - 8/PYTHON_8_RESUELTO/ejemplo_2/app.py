from flask import Flask, render_template, request, jsonify
from funcion_vocales import vocales

# Crear la app
app = Flask(__name__)

# Endpoints (rutas de acceso a la app)
# Visualizar la ruta de inicio "/"
@app.route("/")
# Asociar la función correspondiente
def index():  
    # render_template, permite mostrar archivos html
    return render_template("index.html")


# Nueva ruta
# Endpoints
@app.route("/recibir", methods=["POST"])
def recibir():
    # request permite capturar los datos enviados
    nombre = request.form["nombreIngresado"]
    print("Nombre recibido", nombre)

    # Validar 
    if nombre.isalpha()==True:
        mensaje = f'{nombre} tiene {vocales(nombre)} vocales'
    
    else:
        mensaje = f'Nombre no válido, intente nuevamente'

    return render_template("index.html",nombre=nombre, mensaje=mensaje)


@app.route("/api")
def api():
    datos = [{"name": "Lila"}, {"name": "Lolo"},{"name": "Miguel"}]
    return jsonify(datos)

# Programa principal
if __name__ == "__main__":
    app.run(debug=True)
