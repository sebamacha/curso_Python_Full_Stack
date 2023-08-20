//------Operadores Aritmáticos----
// suma, resta, multiplicación, división, resto y exponente
// Crear dos variables numéricas, aplicar todas las
// operaciones y mostrar resultados en consola.
// numeroUno = parseFloat(prompt("ingrese un número:"));
// numeroDos = parseFloat(prompt("ingrese un número:"));

// console.log("El resultado de la + es:", numeroUno + numeroDos);
// console.log("El resultado de la - es:", numeroUno - numeroDos);
// console.log("El resultado de la * es:", numeroUno * numeroDos);
// console.log("El resultado de la / es:", numeroUno / numeroDos);
// console.log("El resultado de la % es:", numeroUno % numeroDos);
// console.log("El resultado de la ** es:", numeroUno ** numeroDos);

// document.writeln("El resultado de la + es:", numeroUno + numeroDos);
// document.writeln("El resultado de la - es:", numeroUno - numeroDos);
// document.writeln("El resultado de la * es:", numeroUno * numeroDos);
// document.writeln("El resultado de la / es:", numeroUno / numeroDos);
// document.writeln("El resultado de la % es:", numeroUno % numeroDos);
// document.writeln("El resultado de la ** es:", numeroUno ** numeroDos);


// Limpiar consola.
// console.clear()

//------Oeradores Incrementales y Asignación----
// Inicializar una variable i en cero,
// mostrar en consola,
// luego incrementar (En uno y en más de uno), 
// volver a mostrar en consola.
// luego disminuir la cantidad (En uno y en más de uno).
// mostrar en consola.
i = 0;
console.log("Valor:", i);

i = i + 1;
console.log("Valor:", i);

console.log("Valor:", ++i);

console.log("Valor:", i += 1);

console.log("Valor:", i += 8);

// Disminuir

i = 25;
console.log("Valor:", i);

i = i - 1;
console.log("Valor:", i);

console.log("Valor:", --i);

console.log("Valor:", i -= 1);

console.log("Valor:", i -= 5);

//------Operadores de comparación----------
// Mayor,menor, igual,exactamente igual, diferentes,
// mostrar en consola los resultados al utilizarlos
numero1 = 15;
numero2 = 10;

console.log(numero1 > numero2);
console.log(numero1 >= numero2);
console.log(numero1 < numero2);
console.log(numero1 <= numero2);
console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 != numero2);

//------Operadores de cadena += ----------
// Crear una variable llamada presentacion y almanecar  "Mi nombre es",
// para luego concatenar con un nombre y mostrar en consola.
alias = "Mi alias es:"
cadena = alias + " PEPE"
console.log(cadena);

console.clear()
//------Oeradores de Lógicos----------
// AND: &&,
// OR: ||, 
// NOT: !
// Mostrar en consola varias combinaciones lógicas,
// Ejemplo con operaciones aritméticas y logícas:
// crear una variable numérica,
// mostrar en consola el resultado de dos operaciones incluidas en un log

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
