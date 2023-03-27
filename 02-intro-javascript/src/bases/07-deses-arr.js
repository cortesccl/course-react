const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log (personajes);

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El  primer valor del arr se llamará nombre
//2. Se llamará setNombre
const getState = (valor) => {
    return [valor, ()=> {console.log(`Hola ${valor}`)}];
}

const arr2 = getState('Goku');
console.log(arr2);

const [name, asignarNombre] = getState('Goku');
asignarNombre();