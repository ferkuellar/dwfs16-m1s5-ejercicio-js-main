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

// const miArreglo = [1,2,3];

// const [a,b,c] = miArreglo; // Esto tendrá como resultado  a=1, b=2, c=3.

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3 

// Es importante mencionar que podemos omitir uno o más elementos de un arreglo. Es tan simple como dejar un espacio en blanco dentro del [] donde iba el elemento que queremos omitir.

// const miArreglo1 = [1,2,3];

// const [d, ,e] = miArreglo; // Esto tendrá como resultado  d=1, e=3.

// console.log(d); // 1
// console.log(e); // 3 

// También es posible hacer una asignación por defecto a las variables, en caso de que no se encuentre ese valor en el arreglo:

// const miArreglo3 = [1];

// const [f=0, g=2, h=3] = miArreglo3;  // aquí, el valor c no se encuentra en el arreglo, por lo que se le asigna un valor por defecto de 3.

// console.log(f); // 1
// console.log(g); // 2
// console.log(h); // 3 

// EJERCICO 2

// Crear un metodo en javascript que permita agregar un nuevo valor a un objeto global y si ya existe esa propiedad, imprima un mensaje que ya existe la propiedad. Si no, que agregue la propiedad.

// Para crear un método en JavaScript que permita agregar valores a un objeto global y verifique si ya existe la propiedad, se puede utilizar el siguiente código:

// const informacionPersonal = {
//     nombre: "Fernando",
//     edad: 47,
//     ocupacion: "Desarrollador"
// };

// function agregarPropiedad(propiedad, valor) {
//     // Verificar si la propiedad ya existe
//     if (informacionPersonal.hasOwnProperty(propiedad)) {
//     console.log(`La propiedad "${propiedad}" ya existe en el objeto.`);
//     } else {
//     informacionPersonal[propiedad] = valor;
//     console.log(`Se ha agregado la propiedad "${propiedad}" al objeto.`);
//     }
// }

//   // Ejemplo de uso
//   agregarPropiedad("nombre", "Fernando"); // La propiedad "nombre" ya existe en el objeto.
//   agregarPropiedad("email", "fernando@correo.com"); // Se ha agregado la propiedad "email" al objeto.

//   console.log(informacionPersonal); // Imprimir objeto completo

//   En este ejemplo, primero creamos un objeto llamado informacionPersonal con algunas propiedades. Luego, creamos una función llamada agregarPropiedad que toma dos parámetros, propiedad y valor. La función verifica si la propiedad ya existe en el objeto utilizando el método hasOwnProperty(), que devuelve true si la propiedad existe y false si no existe. Si la propiedad ya existe, se imprime un mensaje indicando eso. Si la propiedad no existe, se agrega al objeto utilizando la sintaxis de corchetes ([]) y se imprime un mensaje indicando eso. Al final, se imprime el objeto completo para verificar los cambios realizados.


// EJERCICIO 3

// Crear una variable en javascript que sea un array y crear dos funciones: 1.- el primero debe agregar al array la informacion de un libro en forma de objeto. 
// 2.- el segundo debe imprimir el arreglo aobjetos. 
// De tal forma que se puedan mandar a llamar la consola las funciones para agrgar mas informacion al arreglo o para imprimir todos los elementos del arreglo.

// Primero, crearemos una variable books que será un array vacío

let books = [];

// Luego, crearemos la primera función para agregar información de libros al arreglo. Tomará como parámetros el título, autor y género del libro.

function agregarLibro(titulo, autor, genero) {
    let libro = {
    titulo: titulo,
    autor: autor,
    genero: genero
    };
    books.push(libro);
}

// Por último, crearemos la segunda función para imprimir los elementos del arreglo. Iterará sobre el arreglo y mostrará en consola el título, autor y género de cada libro.

function imprimirLibros() {
    for (let i = 0; i < books.length; i++) {
    console.log(`Título: ${books[i].titulo}, Autor: ${books[i].autor}, Género: ${books[i].genero}`);
    }
}

// Ahora, podemos llamar a ambas funciones para agregar información de libros al arreglo y posteriormente imprimirlos en consola.

//Agregar información de libros al arreglo
agregarLibro("La Sombra del Viento", "Carlos Ruiz Zafón", "Misterio");
agregarLibro("Harry Potter y la Piedra Filosofal", "J.K. Rowling", "Fantasía");

//Imprimir elementos del arreglo
imprimirLibros();

// Si quisieramos agregar más libros al arreglo, simplemente llamaríamos a la primera función con el nuevo título, autor y género.