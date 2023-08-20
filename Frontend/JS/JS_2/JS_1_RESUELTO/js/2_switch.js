// Crear una variable opcion(entero) y almacenar un dato 
//que ingresa por prompt()
/* utilizar switch(varible){
   considerar los casos
   case 1:
       mostrar en consola la opción elegida.
        usar break para salir.
   agregar otro caso (case 2: y mostrar en consola la opción elegida)

   agregar default en caso la opción ingresada sea diferente a 
   las indicadas.
}*/

let opcion = parseInt(prompt("Ingrese un número:"))

switch(opcion){
   case 1:
      console.log("Opción 1 elegida");
      break;
   
   case 2:
      console.log("Opción 2 elegida");
      break;
   
   default:
      console.log("No conozco esa opción");

}
