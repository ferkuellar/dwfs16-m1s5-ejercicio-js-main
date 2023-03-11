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


// DESESTRUCTURACION DE OBJETOS

// La desestructuración de objetos en JavaScript es una característica que permite extraer propiedades individuales de un objeto y almacenarlas en variables separadas. Esto facilita el acceso a los datos de los objetos y puede reducir la cantidad de código necesario para manipularlos.

// La sintaxis básica de la desestructuración de objetos es la siguiente

// const persona = {
//     nombre: 'Fernando',
//     apellido: 'Cuellar',
//     edad: 47,
// };

// const {nombre, apellido, edad} = persona;

//   console.log(nombre); // valor1
//   console.log(apellido); // valor2
//   console.log(edad); // valor3

// En este ejemplo, se crea un objeto con tres propiedades y valores asociados. Luego se utiliza la sintaxis {} para crear nuevas variables propiedad1 y propiedad2 y asignarles los valores correspondientes del objeto. Finalmente, se pueden utilizar las nuevas variables como cualquier otra variable en el código.

// Es posible cambiar el nombre de las variables creadas durante la desestructuración utilizando la sintaxis propiedadOriginal: nuevoNombre. También es posible establecer valores predeterminados para las variables si la propiedad correspondiente no existe en el objeto.

// const objeto1 = {
//     propiedad1: 'valor1',
//     propiedad21: 'valor2'
// };

// const {propiedad1: nuevaPropiedad, propiedad21 = 'valor predeterminado'} = objeto;

//   console.log(nuevaPropiedad); // valor1
//   console.log(propiedad2); // valor2 (del objeto original)

// Además de la desestructuración de objetos, también es posible realizar la desestructuración de arreglos en JavaScript


// DESESTRUCTURACION DE ARREGLOS

// La desestructuración es una característica incorporada en ES6 que nos permite extraer valores de arrays o propiedades de objetos y asignarlas a variables separadas.
// En la desestructuración de arreglos podemos extraer los valores almacenados en ciertos índices del arreglo y asignarlos a variables separadas de manera fácil y rápida.

const miArreglo = [1,2,3];

const [a,b,c] = miArreglo; // Esto tendrá como resultado  a=1, b=2, c=3.

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3 

// Es importante mencionar que podemos omitir uno o más elementos de un arreglo. Es tan simple como dejar un espacio en blanco dentro del [] donde iba el elemento que queremos omitir.

const miArreglo1 = [1,2,3];

const [d, ,e] = miArreglo; // Esto tendrá como resultado  a=1, c=3.

console.log(d); // 1
console.log(e); // 3 

// También es posible hacer una asignación por defecto a las variables, en caso de que no se encuentre ese valor en el arreglo:

const miArreglo3 = [1];

const [f=0, g=2, h=3] = miArreglo3;  // aquí, el valor c no se encuentra en el arreglo, por lo que se le asigna un valor por defecto de 3.

console.log(f); // 1
console.log(g); // 2
console.log(h); // 3 

