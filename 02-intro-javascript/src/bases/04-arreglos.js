// Arreglos en JS
const arreglo = new Array();


console.log(arreglo);
//No es recomendable usar push porque modifica el objeto
const arreglo100 = [1,2,3,4];
console.log(arreglo100);

let arreglo2 = [...arreglo100, 5];

console.log(arreglo);
console.log(arreglo2);

const arreglo3 =  arreglo2.map( function (number) {
    return number * 2;
});
console.log(arreglo3);



