import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => { 

    test('getImagen debe retornar una Url de la imagen', async()=> {
        const resp = await getImagen();
        expect(typeof resp).toBe('string');
        // console.log(resp);
        // expect(resp).toBe('No se encontró la imagen');
    });
});