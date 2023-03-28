import { usContext } from '../../base-pruebas/06-deses-obj';
describe('Pruebas en 06-deses-obj', () => { 

    test('usContext debe retornar un objeto', ()=> {
        const testContext = {
            nombreClave: 'clave',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const persona = {
            nombre: 'Sara',
            edad: 45,
            clave: 'clave',
        };

        const persona1 = usContext( persona );        
        console.log(persona1);
        expect(testContext).toStrictEqual(persona1);
    });

});