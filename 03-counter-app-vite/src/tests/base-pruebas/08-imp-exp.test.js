import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un héroe por Id', ()=> {
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);
        expect( hero).toEqual ({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe regresar undefined si no existe', ()=> {
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);
        expect( hero).toBeUndefined()
        expect( hero).toBeFalsy()
    });

    test('getHeroesByOwner debe retornar una lista con los héroes de DC y debe ser igual a 3', ()=> {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        console.log(heroesDC);
        expect(heroesDC).toHaveLength(3);
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === 'DC'));


    });

    test('getHeroesByOwner debe retornar una lista con los héroes de Marvel y debe ser igual a 2', ()=> {
        const owner = 'Marvel';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC).toHaveLength(2);
        expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === 'Marvel'));
        
    });
});