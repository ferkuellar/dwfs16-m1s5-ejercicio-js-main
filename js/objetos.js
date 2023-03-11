const persona = {
    nombre: 'Fernando',
    apellido: 'Cuellar',
    edad: 47,
    estaActivo: true,
};

// console.log(persona);

// Imprimir propiedades
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona['apellido']);

console.log(persona.carrera);

// Cambiar un valor
persona.edad = 47;
persona.nombre = 'Juan';
console.log(persona);

// Agregar atributo o propiedad
persona.profesion = 'Ingeniero';
console.log(persona.profesion);

// Eliminar atributos
console.log(persona)
delete persona.nombre;
console.log(persona)

