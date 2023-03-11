// const persona = {
//     nombre: 'Fernando',
//     apellido: 'Cuellar',
//     edad: 47,
//     estaActivo: true,
// };

// // console.log(persona);

// // Imprimir propiedades
// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona['apellido']);

// console.log(persona.carrera);

// // Cambiar un valor
// persona.edad = 47;
// persona.nombre = 'Juan';
// console.log(persona);

// // Agregar atributo o propiedad
// persona.profesion = 'Ingeniero';
// console.log(persona.profesion);

// // Eliminar atributos
// console.log(persona)
// delete persona.nombre;
// console.log(persona)

// ejercicio 1

// // Crear el objeto
// const personalInfo = {
//     nombre: "Juan",
//     edad: 27,
//     ocupacion: "Desarrollador"
// };

// // Metodo para actualizar propiedades del objeto
// function actualizarPersonalInfo(propiedad, valor) {
//     personalInfo[propiedad] = valor;
// };

// actualizarPersonalInfo("ocupacion", "Diseñador");
// console.log(personalInfo);


// Iteracion de objetos for in

// const persona = {
//     name: 'Fernando',
//     age: 47,
//     occupacion: 'Developer'
// };

// for (let prop in persona) {
//     console.log(`${prop}: ${persona[prop]}`);
// };

// // Iteracion de objetos recorrer un objeto
// // Object.keys

// const persona = {
//     name: 'Fernando',
//     age: 47,
//     occupacion: 'Developer',
// };

// const prop = Object.keys(persona);

//   // Iterando sobre las claves con forEach()
// prop.forEach(key => {
//     console.log(`${key}: ${persona[key]}`);
// });


// Desestructuracion de objetos

// const persona = {
//     nombre: 'Fernando',
//     apellido: 'Cuellar',
//     edad: 47,
// };

// const {nombre, apellido, edad} = persona;

//   console.log(nombre); // valor1
//   console.log(apellido); // valor2
//   console.log(edad); // valor3


// const objeto1 = {
//     propiedad1: 'valor1',
//     propiedad21: 'valor2'
// };

// const {propiedad1: nuevaPropiedad, propiedad21 = 'valor predeterminado'} = objeto;

//   console.log(nuevaPropiedad); // valor1
//   console.log(propiedad2); // valor2 (del objeto original)

