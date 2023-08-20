// Ciclo exacto: while
// Mostrar por pantalla los números enteros del 1 a 10.
// Importante while
// 1. Inicializar el contador fuera del ciclo.
// 2. Establecer la condición con while
// 3. Tarea a realizar
// 4. Incrementar el contador

// let i = 1 //Contador
// while(i<=10){
//      console.log(i);
//      i++;
// }


// Ciclo condicional: while con condiciones.
// Mostar los números pares que estén entre 
// 0 y 20 
// Mostrar cada número en la consola.
// 1. Inicializar el contador fuera del ciclo.
// 2. Establecer la condición de salidacon while
// 3. Tarea a realizar: definir condición
// 4. Incrementar el contador fuera del condicional.
// var contador = 0;
// while(contador<=20){
     
//      if(contador%2==0){
//           console.log("Soy par:",contador);
//      }
     /*else{
          console.log("No soy par:",contador);
     }*/
     //contador++;
//}


// Ciclo do-while
//  Crear un ciclo para sumar todos los numeros que se 
// indiquen y cuando se quiera salir ingresar cero
// 1. Inicializar el contador fuera del ciclo que será suma.
// 2. Definir la operación dentro del do: recibir un num y sumar
// 3. Fuera del do, indicar en el while la condición de salida.

// let suma = 0;
// do{
//      num = parseFloat(prompt("Ingrese número y 0 para salir"));
//      suma += num;
// }while(num!=0);

// console.log(suma);


// Ciclo for
/* Estructura: for(inicializar contador; condición del contador; incrementar){
     mostrar en consola el contenido del contador en cada ciclo
}*/

// for(let i=0;i<=10;i++){
//      console.log("valor de i:", i);
// }

//funcion para utilizar un login?????


// Ciclo for con condicional
// Crear el ciclo for para que se repita 10 veces
// Mostrar en consola cada iteración.
// Agregar condicional para cuando el contador sea igual 
// a un número indicado salga del ciclo con break.

for(let i=0; i<=10; i++){
     console.log("Valor de i", i);

     if(i==4){
          break;
     }
}