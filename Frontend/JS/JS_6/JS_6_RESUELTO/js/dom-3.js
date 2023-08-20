function mayorUnidad(){
    const lista = document.getElementsByTagName("li");
    const mostrarRespueta = document.getElementsByName("respuesta")
    console.log(mostrarRespueta);
    
    
    // Cambie el HTML interno del elemento en el documento
    // para acceder a los valores por posición en la lista se indica .innerHTML
    
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