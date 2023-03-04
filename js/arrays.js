// SECCION DE ARRAYS

// const frutas = ["platano", "fresa", [[true, false], "lechuga"], "uva", "manzana"];

// console.log(frutas);
// console.log(frutas[2]);
// console.log(frutas[2][0]);
// console.log(frutas[2][0][1]);

// agregar al final

// const frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana"];
// console.log(frutas);

// //  AGREGAR DATOS AL FINAL
// frutas.push("Mango");
// console.log(frutas);

// // agregar datos al principio
// frutas.unshift("Naranja");
// console.log(frutas);

// // agrega el dato del final
// frutas.push("Kiwi");
// console.log(frutas);

// // elimina datos del final
// frutas.pop();
// console.log(frutas);

// // elimina el primer dato del arreglo
// frutas.shift();
// console.log(frutas);

// // reemplazar un elemento
// frutas.splice(2, 1, "Sandia");
// console.log(frutas);

// SECCION DOS RECORRER UN ARRAY
// con FOR

// const frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana"];
// const frutasFiltradas = frutas.filter((frutas) => frutas.startsWith('P'));
// console.log(frutasFiltradas);
// console.log(frutas.length);
// console.log(typeof frutas.length);
// console.log(frutas[0]);
// console.log(frutas[5]);

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// };

// frutas.forEach((fruta, indice) => {
//     console.log(indice);
//     console.log(fruta);    
// });

// map
// const frutas2 = frutas.map((fruta) => {
//     return fruta.toUpperCase();
// });

// console.log(frutas2);

// filtrar - filtrar informacion
// const frutasFiltradas = frutas.filter((fruta)=>{
//     return fruta != 'Uva';
// });

// console.log(frutasFiltradas);

// find
// const frtuaEncontrada = frutas.find((fruta)=> {
//     return fruta.startsWith;
// });

// console.log(frtuaEncontrada);

// filter
// const numeros = [1,2,3,4,5];
// console.log(numeros);

// const valor = numeros.reduce((acumulado, numero) => {
//     return acumulado + numero;
// }, 0);

// console.log(valor);

// // Ejercicio 1
// for(let i = 1; i <= 10; i++){
//      let resultado = 2 * i;
//     console.log(`2 x ${i} = ${resultado}`);
// };

// // Ejercicio 2
// const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
// const nombreMayusculas = [];

// nombres.forEach(nombre => {
//     nombreMayusculas.push(nombre.toUpperCase());
// });

// console.log(nombreMayusculas); // imprime "ALBERTO,PATY,JOSE,DANIEL,LUIS,ANTONIO,LUIS,PATY,LUIS"

// // Ejercicio 3

// const nombreMinusculas = nombreMayusculas.map(nombre => nombre.toLowerCase());

// console.log(nombreMinusculas); // imprime "alberto,paty,jose,daniel,luis,antonio,luis,paty,luis"

// // Ejercicio 4
// const filtroNombres = nombres.filter(nombre => nombre.toLowerCase() === "luis");

// console.log(filtroNombres); // imprime "luis,Luis,luis"

// // Ejercicio 5
// const numeros = [2, 4, 6, 8, 10];
// const total = numeros.reduce((acumulado, numero) => acumulado + numero);
// console.log(total); // Salida: 30

// function obtenerPromedio(calificaciones) {
//     const suma = calificaciones.reduce((total, calificacion) => total + calificacion);
//     const promedio = suma / calificaciones.length;

//     console.log(`El promedio es ${promedio}`);

//     if (promedio > 70) {
//     console.log("Aprobó");
//     } else {
//     console.log("No aprobó");
//     };
// };

// const notas = [70, 80, 80, 90, 60];
// obtenerPromedio(notas); // El promedio es 81.25, Aprobó

// ejercicio individual

function printArrayElements(array) {
    array.forEach(elemento => console.log(elemento));
};

const myArray = ['uno', 2, null, 0];
printArrayElements(myArray);
