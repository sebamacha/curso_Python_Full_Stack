// Declarar tres constantes
// nombreIngresado, mensajeBienvenida y boton
// almacenar en cada uno el id correspondiente.
// const variable = Traer con document.getElementById("nombre_id")



// acceder a la constante botón y agregrar un evento con
// nombre_boton.addEventListener("click", ()=>{operación}
// en operación: declarar la constante nombre a partir del nombreIngresado.value
// mostrar en consola el nombre
// crear el ciclo for que itere todo el nombre
// declarar la variable charCode = nombre.charCodeAt(i);

        // los charCodeAt() método devuelve UTF-16 unidad de código en el índice especificado. Esto 
        // devuelve un número entero entre 0 y 65535. Los primeros 128 puntos de código Unicode (0 a 127) 
        // coinciden con el juego de caracteres ASCII.
        // permite digitar sólo texto, letras mayúsculas (del 65 al 90) y minúsculas (del 97 al 122)


// Crear un condicional para verificar si ese nombre es diferente de vacío
// y si contiene letras mayúsculas  (charCode >= 65 && charCode <= 90)
// o  contiene letras minúsculas     || (charCode >= 97 && charCode <= 122)
// Si se cumple agregar a la const  mensajeBienvenida.textContent= a la bienvenida personalizada

// agregar otra condición donde nombre se diferente de vacío
// o que no sean mayúsculas y minúsculas 
// Si se cumple agregar a la const  mensajeBienvenida.textContent= vacío
// y un alert("Ingrese un nombre solo puede contener caracteres alfabéticos y espacios.")

// y sino se cumple mostrar un alert() informando que ingrese su nombre


































// const nombreIngresado = document.getElementById("nombre")
// const mensajeBienvenida = document.getElementById("bienvenida")
// const boton =document.getElementById("boton")


// boton.addEventListener("click", ()=>{
//     const nombre = nombreIngresado.value;
//     console.log("Ingreso por form:", nombre);
    
//     for (var i = 0; i < nombre.length; i++) {
//         var charCode = nombre.charCodeAt(i);
       
//         if (nombre !="" && ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))){
//             mensajeBienvenida.textContent = `Bienvenido ${nombre}`
            
//         }else if(nombre ==="" || !((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))){
//             mensajeBienvenida.textContent = ""
//             alert("Ingrese un nombre solo puede contener caracteres alfabéticos y espacios.");
//         }
//         else{
//             alert("Ingrese un nombre");
//         }

//       }

// }
// );