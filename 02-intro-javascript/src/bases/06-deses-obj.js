// Desestruración de objetos 
// Asignación Desestructurante

const person = {
    name:  'Tony',
    age: 45,
    key: 'Ironman',
    rango: 'Soldado'
}

//Asignación desestructurante


//console.log (person.name);
//console.log (person.age);
//console.log (person.key);

//console.log (name);
//console.log (age);
//console.log (key);

//const getPerson = (user) => {
//    const { name, age,  key} = user;
//    console.log (name, age, key);
//}
//getPerson (person);

//const getPerson2 = ({name, age, key, rango= 'Captain'}) => {
//    console.log(name, age, key, rango);
//};
//getPerson2(person);

const getPerson3 = ({name, age, key, rango= 'Captain'}) => {
    return {
        nameKey: key,
        anios: age,
        latlng: {
            lat: 14,
            lng: -12
        }
    }
};
const  {nameKey, anios, latlng:{lat, lng}} = getPerson3 (person);
console.log(nameKey,anios);
console.log(lat, lng);

