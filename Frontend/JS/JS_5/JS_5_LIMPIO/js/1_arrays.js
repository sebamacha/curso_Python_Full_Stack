// ¿Cómo se ve un objeto array?
// declarar una const a1
// almacenar distintos tipos de datos entre []
// mostrar en consola y observar posición de elementos
// mostrar el primero y el último
a1 = [2,-6,1.5, true, [5,6,7], "hola"];
console.log("Array",a1);
console.log("primer elemento",a1[0]);
console.log("Longitud",a1.length);
console.log("último elemento",a1[a1.length-1]);
console.log("posición 4",a1[4]);



// Crear un objeto array 
// declarar const objeto = new Array(indicar los elementos separados por coma)
// observar longitud usando el método length
const a2 = new Array();
console.log("Array2",a2);



// Agregar elementos 
// nombre_array.push(elementos separados por coma)
a2.push(-25,15,36,-45,41);
console.log("Array",a2);


// Eliminar elementos 
// Elimina el último, nombre_array.pop()
// Elimina por posición 
// nombre_array.splice(ubicación,cantidad de elementos)
a2.pop();//pop elimina el ultimo elemento
console.log("Array eliminado ultimo",a2);
a2.splice(1,1);//splice elimina  elemento
console.log("Array eliminado por posición",a2);
a2.splice(0,2);//splice elimina  elemento, si ponemos mas de un valor tembien elimina elelemto siguiente
console.log("Array eliminado por posición",a2);


// Ordenar array
// Menor a mayor con objeto.sort()
// Mayor a menor 
// array.sort(función anónima(2 parámetros){return resta})
a3 = ["kiwi", "manzanas","frutilla", "ananá","pera"];
a3.sort();
console.log("Array ordenado",a3);
//NO FUNCIONA PARA NUMEROS
a4 = [5,-6,0,3,10];
a4.sort();
console.log("Array ordenado",a4);
//ordenando numeros con funcion anonima
a4.sort(function(a,b){return b-a});
console.log("Array ordenado",a4);
a4.reverse();
console.log("Array ordenado y en reverse",a4);

// Recorrer un array con for
// mostrar posición y elemento
a6 = ["Lucas", "Pablo", "Erica", "Monica", "Valentina", "Diego"]
for (let i = 0; i < a6.length; i++) {
    console.log("posicion",i,"Elemnto", a6[i]);
    
}


// console.clear();
// MÉTODOS CON FUNCIONES
// Realizar una operación a todos los
// elementos de un array 
// crear una función para multiplicar que reciba
// tres parámetros: elemento, posición y array
// sobreescribir cada elemento con el resultado
// array[posición] = elemento * 10
// array.forEach(función_operacion)
// mostrar en consola el array
a7 = [12,5,-6,-3,-2,14,2];

function multiplicar(elemento, i, array) {
  array[i] = elemento * 10;
}

a7.forEach(multiplicar);
console.log("Producto",a7);


// Para filtrar información 
// crear un array con edades
// crear una función esMenor que reciba una edad
// incluya retorno con la operación 
// crear una variable para almacenar edades.filter(invocar a la función)
// mostrar el resultado
edades = [10,12,15,14,25,16,35,27];
function esMenor(edad) {
    return edad < 18
}
menores =edades.filter(esMenor);
console.log("menores de edad", menores);

// Utilizar un bucle for para iterar las edades
// for(variable in array){}-otra clase iterar
animales = ["Gato","Perro", "Gallina", "oso"];
for(i in animales){
    console.log("ver", i,animales[i]);
}

//conjuntos y mapas

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// Iterate over Map
for (let [key, value] of fruits) {
  console.log(key + " = " + value);
}
//The has() Method
// Determine if a Map Contains a Key
console.log("devuelve true si existe el elemento dentro de fruits",fruits.has("apples"));
//elminar elemento
fruits.delete("apples");
console.log("luego de eliminar verifica si existe elemento",fruits.has("apples"));