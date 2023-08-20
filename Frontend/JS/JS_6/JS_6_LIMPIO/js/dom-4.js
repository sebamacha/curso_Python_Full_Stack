//.querySelector(selector) devuelve el primer elemento que encaja con el selector CSS 
// selector; de clase, id, tipo(etiqueta)

function agregarFondo(){
    let elemento = document.querySelector(".ejemplo")
    elemento.style.backgroundColor="cyan";
}


function mayorUnidad(){
    const lista = document.querySelectorAll("li");
    const mostrarRespueta = document.getElementsByName("respuesta")
    console.log(lista);
    
    
    // Cambie el HTML interno del elemento en el documento
    // para acceder a los valores por posición indicando .innerHTML
    
    var maximo = 0
    var indice = 0

    for(let i=0;i<lista.length;i++){

        console.log("Valores", lista[i].innerHTML);
                
        let fruta = lista[i].innerHTML.split(" ")
        unidades = parseInt(fruta[1])

        if(maximo<unidades){
            maximo = Math.max(maximo, unidades)
            indice  = i

        }else{
            maximo = maximo 
            indice = indice 
        
    }}

    
    console.log(maximo);
    console.log(indice);
    lista[indice].style.backgroundColor="lightyellow"
    mostrarRespueta[0].innerHTML =lista[indice].innerHTML

    
}