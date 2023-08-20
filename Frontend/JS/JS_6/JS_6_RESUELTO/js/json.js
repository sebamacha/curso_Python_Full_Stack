//Crear un json
let persona = {
    "nombre": "Juan",
    "apellido": "Bacchi",
    "edad": 45,
    "hijos": ["Maria", "Fer", "Agus"]
}

console.log(persona);
console.log(typeof(persona));

/// Conversión a Json
let jsonPersona = JSON.stringify(persona)
console.log(typeof(jsonPersona));
console.log(jsonPersona);

// Ver el valor de la posición 1 del array de 
// la propiedad hijos
console.log(persona["hijos"]);
console.log(persona["hijos"][1]);
console.log(persona.hijos[1]);

// // Agregar un nuevo hijo
persona["hijos"].push("Valeria")

console.log(persona["hijos"]);

// console.log('antes:',persona);
// // Modificación de la edad
console.log('antes',persona);
persona.edad = 58
persona['edad'] = 58
console.log('despúes',persona);


// /// Conversión a objetos
let objectoPersona = JSON.parse(jsonPersona)
console.log(objectoPersona);
console.log(typeof(objectoPersona));
