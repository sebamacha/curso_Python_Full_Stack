const fotos = ["https://picsum.photos/id/237/200/300", 
                "https://picsum.photos/id/236/200/300",
                "https://picsum.photos/id/235/200/300", 
                "https://picsum.photos/id/234/200/300"]


function verImagen(){
    let imagen = document.getElementsByClassName("imagen");
       
    //getElementsByClassName devuelve un array
    for(let i=0;i<imagen.length;i++){
        imagen[i].src = fotos[i]
                
}}


const titulos = ["Perro", "Casa", "Montaña", "Torre"]
const descripciones = ["Perro Negro", "Casa retirada", "Montaña helada", "Torre alta"]

function mostrarImagen(){
    let imagen = document.getElementsByClassName("card-img-top")
    let titulo = document.getElementsByClassName("card-title");
    let descripcion = document.getElementsByClassName("card-text");

    //getElementsByClassName devuelve un array
    for(let i=0;i<imagen.length;i++){
        imagen[i].src = fotos[i]
        titulo[i].innerHTML = titulos[i]
        descripcion[i].innerHTML = descripciones[i]
}}
