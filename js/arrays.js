// SECCION DE ARRAYS

// const frutas = ["platano", "fresa", [[true, false], "lechuga"], "uva", "manzana"];

// console.log(frutas);
// console.log(frutas[2]);
// console.log(frutas[2][0]);
// console.log(frutas[2][0][1]);

// agregar al final

const frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana"];
console.log(frutas);

//  AGREGAR DATOS AL FINAL
frutas.push("Mango");
console.log(frutas);

// agregar datos al principio
frutas.unshift("Naranja");
console.log(frutas);

// agrega el dato del final
frutas.push("Kiwi");
console.log(frutas);

// elimina datos del final
frutas.pop();
console.log(frutas);

// elimina el primer dato del arreglo
frutas.shift();
console.log(frutas);

// reemplazar un elemento
frutas.splice(2, 1, "Sandia");
console.log(frutas);

