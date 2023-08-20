// ¿Cómo crear objetos?
// Crear el objeto, declarar la variable persona
// Definir propiedades: nombre:"valor", apellido:"valor", dni:valor
// Método: nombreCompleto: función anónima(){retorne nombre completo}
// (acceder a propiedades con this.propiedad)
// acceder a propiedades y métodos con la notación del .

var persona = {
    nombre: "Juan",
    apellido: "Polo",
    dni: 123456,

    nombreCompleto: function(){
        return "Hola soy " + this.nombre + " y mi apellido es "+ this.apellido
    }
}

console.log("Nombre:", persona.nombre);
console.log(persona.nombreCompleto());


// var perro ={
//     nombre: "Pepe",
//     edad:2,
//     raza: "Caniche",
//     vivo: true,

//     sonido:function(){
//         return "Mi sonido es guau"
//     }
// }

// console.log("Raza",perro.raza);
// console.log(perro.sonido());


// Función constructora.
// Para crear varios objetos a partir de una clase.
// Crear la clase perro, con propiedades nombre, edad, vivo
// Estructura: class nombre_clase{
//                constructor(propiedades){
//                     this.propiedades=propiedades}
// Crear el método: quienSoy retornar toda la info del perro
// nombre_clase.prototype.nombre_función = función anónima(){retornar info}
// Crear dos objetos; perro1, perro2  
// Crear objeto: declarar variable = new nombre_clase(argumentos)
// Mostrar el contenido de los dos objetos.

class perro{
    constructor(nombre, edad, vivo){
        this.nombre = nombre
        this.edad = edad
        this.vivo = vivo
    }
}

perro.prototype.quienSoy = function() {
    return "Soy un perro llamado: "+ this.nombre
}


var perro1 = new perro("luna", 5, true)
console.log(perro1.quienSoy());

var perro2 = new perro("lolo", 15, false)
console.log(perro2.quienSoy());

// La clase String y sus métodos:
// Crear objeto: declarar variable = new String("cadena")
// length; longitud
// charAt(ubicación)
// concat(texto)
// indexOf("palabra o carácter"); devuelve la ubicación
// toLowerCase()
// toUpperCase()

var texto1 = new String("Esto es una cadena")
console.log(texto1.length);
console.log(texto1.toUpperCase());



// El objeto Math, sus propiedades y métodos.
// Superficie de un circulo: pi * radio al cuadrado
// Math.PI
// Math.pow(base, exponente); potencia
// Math.round(numero) --> se puede redondear
// Math.sqrt(); raíz cuadrada.

var superficie = Math.round(Math.PI * Math.pow(5,2))
console.log(superficie);



