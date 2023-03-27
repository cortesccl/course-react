const name = 'Sara';
const surname = 'Cortés';

const fullName = `
${name} 
${surname}
${1 + 1}
`;
const greeting = 'Hola Mundo'
console.log(fullName);

function getGreeting (name) {
    return 'Hola ' + name;
}

console.log(`Este es un texto: ${getGreeting(name)} `);




