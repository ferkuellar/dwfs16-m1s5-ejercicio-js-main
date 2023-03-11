// var nombre = 'Jesus'; // no es global
let nombre = 'Jesus'; // tiene un alcance global

// if(4 > 5) {
//     var nombre = 'Alejandra'
//     console.log(nombre);
// }

// if(4 < 5) {
//     var nombre = 'Alejandra'
//     console.log(nombre);
// }

if(4 > 5) {
    let nombre = 'Alejandra'
    console.log(nombre);
}

if(4 < 5) {
    let nombre = 'Alejandra'
    console.log(nombre);
}

console.log(nombre);


// String templates

let firstName = 'Fernando';
let lastName = 'Cuellar';
let age = 47;

console.log('Hola soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años');

console.log(`Hola soy ${firstName} ${lastName}, tengo ${age} años`);