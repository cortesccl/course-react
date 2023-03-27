// Funciones en JS
const greeting = function (name) {
    return `Hola, ${name}`;
}

// Funciones de flecha

const greeting2 = (name) => {
    return `Hola, ${name}`;
}
const greeting3 = (name) => `Hola, ${name}`;
const greeting4 = () => `Hola Mundo`;

//greeting = 30
console.log(greeting('Sara'));
console.log(greeting2('Vegetta'));
console.log(greeting3('Andres'));
console.log(greeting4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
console.log(getUser())

//sin return, forma implicita
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});
console.log(getUser2())

const user = getUser();
console.log(user);

//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
function getActiveUser (name) {
    return {
        uid: 'ABC567',
        username: name
    }
}

const activeUser = getActiveUser('Fernando');
console.log (activeUser);

const activeUserTarea = (name) => ({
    uid: 'ABC567',
    username: name
});
console.log(activeUserTarea('UsuarioPrueba'));