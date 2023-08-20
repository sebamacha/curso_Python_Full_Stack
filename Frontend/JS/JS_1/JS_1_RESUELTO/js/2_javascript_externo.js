// Este comentario es por linea

/* Este comentario
abarca más
de una linea
*/

//---------1. VARIABLES------------
//------Numéricas, texto y booleanas
/* Declarar una variable por nombre y mostrar en consola.
Declarar una variable con var y mostrar en consola
Declarar una variable con let y mostrar en consola
Verificar el tipo de dato con typeof()*/

// Forma Nº1: por nombre
numero = 5.6;
console.log(numero);
console.log(typeof(numero));

numero = 8;
console.log(numero);
console.log(typeof(numero));

// Forma Nº2: var
var nombre = "Margarita";
console.log(nombre);

nombre = "Lucas";
console.log(nombre);

// Forma Nº3: let, identifica si la variable fue creada 
// let nombre = "Luis";
// console.log(nombre);

let apellido = "Polo";
console.log(apellido);

apellido = "Garrido";
console.log(apellido);

nombreApellido = "Julián Polo"

//---2. SEPARAR variables y textos-----------
// Dos formas con: + y ,
console.log("El apellido es:"+apellido+nombre);
console.log("El apellido es:",apellido,nombre);
console.log("El número es:"+numero);
console.log("El número es:",numero);

// Limpiar console
console.clear()

//---3. Definir una constante--------
// Crear una constante para PI y para IVA
const PI = 3.141516;
operacion = 54 * PI;
console.log("El resultado de la operación:", operacion);

const VALOR_IVA = 0.21;
console.log("El valor del IVA:", VALOR_IVA);

//------3. USO DEL prompt()---------
/*Mostrar un mensaje solicitando datos,
  crear una variable para almacenar un nombre, 
  mostrar el nombre ingresado por consola*/
// console.log("Ingrese sus datos:");
// nombreCompleto = prompt("Ingrese su nombre completo:")
// console.log("El nombre completo ingresado es:", nombreCompleto);
// document.write("El nombre completo ingresado es: ", nombreCompleto);
// document.write("El nombre completo ingresado es: ", nombreCompleto);

// document.writeln("El nombre completo ingresado es: ", nombreCompleto);



/* Comentar lo anterior. 
   Solicitar edad, almacenar en una 
   variable y mostrar en consola la edad más 1.
   Evaluar el resultado e incorporar solución 
   para convertir el dato (parsear el dato parseInt,parseFloat, String()) */

let edad = parseInt(prompt("Ingrese su edad:"));
console.log("El dato es:",typeof(edad));
suma = edad + 1;
console.log("La edad ingresda +1 es:", suma);

 

