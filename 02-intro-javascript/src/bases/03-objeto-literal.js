const person = {
    name: 'Sara',
    surname: 'Cortés',
    age: 40,
    address: {
        city: 'Salamanca',
        postalCoda: 37338,
        lat: 14.3332,
        lng: 15.26654
    }
};

console.table(
    person
);

console.log(
    person
);


const person2 = person;
person2.name = 'Andrés';
console.log(person);
console.log(person2);

const person3 = { ...person }; //Crear un clon
person3.name = 'Holi';
console.log(person3.name);