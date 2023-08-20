// Agregar un titulo
function agregarTitulo(){
    const titulo = document.createElement("h1")
    titulo.innerHTML = "Soy un titulo creado en el script"
    titulo.style.color = "green"
    document.body.appendChild(titulo)
}

function agregarImagen(){
    const img = document.createElement("img")
    img.src = "https://picsum.photos/seed/picsum/200/300"
    img.alt="random"
    document.body.appendChild(img)
}