import { getHeroeById } from './bases/08-import-exp'

// const promise  = new Promise( (resolve, reject)=> {
//     setTimeout(() => {
//         //Tarea
//         //1.Importar getHeroeById(2)
//         const p1 = getHeroeById(2);
//         console.log(p1);
//         //console.log('2 segundos después')
//         resolve( p1 );
//     }, 2000);
// });
// promise.then((heroe) => {
//     console.log('Then de la  promesa ' + heroe);
// }).catch (err => console.warn(err));

const getHeroeByIdAsync = ( id ) => {
     return new Promise( (resolve, reject)=> {
     setTimeout(() => {
         //Tarea
         //1.Importar getHeroeById(2)
         const p1 = getHeroeById(id);
         console.log(p1);
         if (p1) {
            resolve ( p1 );    
         } else {
            reject ('No se puede encontrar el héroe')
         }
         //console.log('2 segundos después')
         resolve( p1 );
     }, 2000);
 });

}
getHeroeByIdAsync(2)
    .then (console.log)
    // .catch(err => console.warn(err))
    .catch(console.warn)
    ;
