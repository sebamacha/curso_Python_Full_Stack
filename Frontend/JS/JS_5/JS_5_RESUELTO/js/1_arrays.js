// ¿Cómo se ve un objeto array?
// declarar una const a1
// almacenar distintos tipos de datos entre []
// mostrar en consola y observar posición de elementos
// mostrar el primero y el último
a1 = [2,-6,1.5, true, [5,6,7], "Lucia"]
console.log("Array:",a1);
console.log("primer elemento:",a1[0]);
console.log(" elemento:",a1[4]);
console.log("Longitud:",a1.length);
console.log("último elemento:",a1[a1.length-1]);

// Crear un objeto array 
// declarar const objeto = new Array(indicar los elementos separados por coma)
// observar longitud usando el método length
const a2 = new Array()
console.log("Array2", a2);

// Agregar elementos 
// nombre_array.push(elementos separados por coma)
a2.push(-25,15,36,-45,41)
console.log("Array2 con elementos:", a2);

// Eliminar elementos 
// Elimina el último, nombre_array.pop()
// Elimina por posición 
// nombre_array.splice(ubicación,cantidad de elementos)
a2.pop()
console.log("Array2 eliminado último:", a2);

a2.splice(1,1)
console.log("Array2 eliminado por index:", a2);

a2.splice(0,2)
console.log("Array2 eliminado por index:", a2);

// Ordenar array
// Menor a mayor con objeto.sort()
// Mayor a menor 
// array.sort(función anónima(2 parámetros){return resta})
a3 = ["Kiwi", "Manzanas", "Frutilla", "Ananá", "Pera"]
a3.sort()
console.log("Array3 ordenado:", a3);

// No funciona para números
a4 = [5,-6,0,3,10]
a4.sort()
console.log("Array4 orden con nros:", a4);

a4.sort(function(a,b){return b-a})
console.log("Array4 orden con nros:", a4);

a5 = [5.2,-6.1,0.6,3.5,10.2]
a5.sort(function(a,b){return b-a})
console.log("Array5 orden con nros:", a5);

// Recorrer un array con for
// mostrar posición y elemento

console.clear()

a6 = ["Lucas", "Pablo", "Erica", "Mónica", "Valentina", "Diego"]
for(let i=0; i<a6.length;i++){
    console.log("Posición:", i, "Elemento:", a6[i]);
  //console.log("Posición:", 0, "Elemento:", a6[0]);
}


// MÉTODOS CON FUNCIONES
// Realizar una operación a todos los
// elementos de un array 
// crear una función para multiplicar que reciba
// tres parámetros: elemento, posición y array
// sobreescribir cada elemento con el resultado
// array[posición] = elemento * 10
// array.forEach(función_operacion)
// mostrar en consola el array
a7 = [12,5,-6,-3,-2,14,2]

function multiplicar(elemento, i, array){
    array[i] = elemento * 10
}

a7.forEach(multiplicar)
console.log("Producto:", a7);

// Para filtrar información 
// crear un array con edades
// crear una función esMenor que reciba una edad
// incluya retorno con la operación 
// crear una variable para almacenar edades.filter(invocar a la función)
// mostrar el resultado
edades = [10,12,15,14,25,16,35,27]

function esMenor(edad){
    return edad < 18
}

menores = edades.filter(esMenor)
console.log("Menor:", menores);


// Utilizar un bucle for para iterar las edades
// for(variable in array){}
animales = ["Gato", "Perro", "Gallina", "Oso"]

for(i in animales){
    console.log(animales[i]);
}


