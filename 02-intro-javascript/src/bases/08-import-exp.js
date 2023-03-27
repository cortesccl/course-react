//import { heroes } from './data/heroes'
//import {heroes} from './data/heroes'

import heroes, {owners} from '../data/heroes';

//console.log (owners);

const getHeroesByIdLargo = (id) => {
    return heroes.find((heroe) => {
        if (heroe.identificación === id) return true
        else return false
    });
}
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.identificación === id);
};

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.dueño === owner);

//console.log(getHeroesById(2));
//console.log(getHeroesByIdLargo(2));
//console.log(getHeroesByOwner('Marvel'));
