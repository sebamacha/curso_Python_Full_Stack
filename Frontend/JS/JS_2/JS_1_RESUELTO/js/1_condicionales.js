// Condicional simple
// Solicitar un número y verificar si es mayor a cero
/* Estructura: if(condición){
                            enviar un alerta()
}*/

numero = parseFloat(prompt("Ingresar un número:"));
// if(numero>0){
//     alert("Soy mayor que cero")
// }


// Condicional doble
// Usando la misma variable, agregar al if un else, para mostrar 
// que sucede sino se cumple la condición.
// if(numero>0){
//     alert("Soy mayor que cero")
// }else{
//     alert("Soy menor o igual que cero")
// }

// Del ejemplo anterior, usar el operador ternario para evaluar si es mayor o menor
// Crear una variable y almacenar un número que se ingrese con prompt()
// evaluación del número, crear una variable y almacenar la definición ternaria
// (condición ? si se cumple la condición : sino se cumple la condición)
// Mostrar en consola el resultado
var ternario = (numero>0 ? "Soy mayor "+numero : "Soy menor o igual a cero");
console.log(ternario);

console.log(numero<0 ? "Soy menor "+numero : "Soy mayor o igual a cero");


// Condicional anidado
// Usando la misma variable, agregar al if un else, 
// y dentro del else definir dos condiciones más que consideren 
// que sucede sino se cumple la condición.
// if(numero>0){
//     alert("Soy mayor que cero")
// }else{
//     if(numero<0){
//         alert("Soy menor que cero")
//     }
//     else{
//         alert("Soyigual a cero")
//     }
// }

// Del ejemplo anterior modficarlo para agregar más condiciones 
// con: if(), else if (), else
// Otra opción
// if(numero>0){
//     alert("Soy mayor que cero")
// }else if(numero<0){
//     alert("Soy menor que cero")
// }else if(numero==0){
//     alert("Soy igual a cero")
// }else{
//     alert("No conozco el valor ingresado")
// }



