// Función  saludar
// Palabra reservada --> funtion
// Nombre de la funcion con ()
// Seguido de llaves {}
// En la llaves definir la operación a realizar
// Una vez lista, invocar.
function saludar(){
    console.log("Hola");
}

saludar()


// Función  saludar con parametros
// para saludo personalizado
// Una vez lista, invocar pasandole los argumentos.
// Template string: ` texto  ${variable}`
function saludo_personalizado(nombre){
    console.log("Hola", nombre);
    console.log(`Hola ${nombre} encantado de estar en una función`);

}

saludo_personalizado("Miguel")


// Función multiplicar, que reciba 
// dos valores por parámetro 
// crear una variable resultado, almacenar el resultado 
// de la operación y luego retornarlo para mostrarlo por consola.
function multiplicar(num1, num2){
    var resultado = num1 * num2;
    return resultado
}


var resultado = multiplicar(8)
console.log(resultado);

var resultado1 = multiplicar(8,45)
console.log(resultado1);


// Función sumar, que reciba 
// dos valores por parámetro y uno este por defecto  
// crear una variable resultado y almacenar el resultado 
// de la operación, para luego mostrarlo retornalo y
// capturar el resultado en una variable una vez invocado.
function sumar(num1=1,num2=1){
    return num1 + num2
}

var numeroUno = parseFloat(prompt("Ingrese un número."))
var numeroDos = parseFloat(prompt("Ingrese otro número."))

var sumatoria = sumar(numeroUno)
console.log("Suma:", sumatoria);


var sumatoria = sumar(numeroUno, numeroDos)
console.log("Suma:", sumatoria);


// Función anónima
// definir una constante con el nombre saludo
// almacenar la función sin nombre ()
// entre llaves retornar "Hola"
// invocar la función
const saludo = function(){
    return "Hola soy una función anónima"
}

console.log(saludo());


var restar = function(num1, num2){
    return num1 - num2
}

var resta = restar(95,85)
console.log("Resta",resta);


// Función flecha|arrow
// Declarar una variable que almacenará si un número es par
// Almacenar =  el parámetro => operación(lo que retornará)
// Invocar a la función por le nombre de la variable y pasar argumento. 

var esPar = numero => numero%2==0;
console.log("¿ES PAR?", esPar(8));

// 2**2
// base ** exponente

var potencia = (base,exponente) => base**exponente;

console.log("POTENCIA:", potencia(3,2));



// Crear condional a===5
// Declarar variable a con let, con otro valor
// Mostrar en consola el valor de a dentro y fuera de la función

// Declarar variable b con var, con otro valor
// Mostrar en consola el valor de b dentro y fuera de la función
console.clear()

var a = 5
var b = 10

console.log("Estoy al inicio A:", a);
console.log("Estoy al inicio B:", b);

if(a===5){
    let a = 27;
    console.log("Estoy dentro A:", a);

    var b = 56;
    console.log("Estoy dentro B:", b);
}

console.log("Estoy fuera A:", a);
console.log("Estoy fuera B:", b);