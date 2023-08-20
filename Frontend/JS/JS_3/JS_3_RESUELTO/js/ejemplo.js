// Ejemplo:
// Crear función
// suma_random; se encargará de sumar 3 número random
// declarar una variable suma, donde se guardará la suma
// crear un bucle for para iterar 3 veces y en cada vuelta
// declarar una variable numero para almacenar 
// el número random entero(entre 0 y 10) (para ello, usar el objeto Math 
// para redondear el número random * (max - min) + min)
// Mostrar en consola cada número obrenido y sumarlo, retornar suma
function suma_random(){
    let suma = 0;
    for(let i=0; i<3; i++){
        var numero = Math.round(Math.random() * (10- 0) + 0)
        console.log(numero);
        suma += numero;
    }

    return suma
}

// Crear la función jugar,
// tiene un parámetro sumatoria
// condional para ver si la suma
// es menor a 21 ganaste=true y sino ganaste=false
//returnar ganaste

function jugar(suma){
    if(suma<=21){
        ganaste = true;
    }else{
        ganaste = false
    }
    return ganaste
}

// Invocar
let sumatoria = suma_random()
let resultado = jugar(sumatoria)
console.log(`Ganaste: ${resultado}`);