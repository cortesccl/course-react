import { types } from "../../../auth"


describe('Pruebas en "Types"', () => { 
    test('Debe de regresar estos types', () => { 
        console.log(types)
        expect(types).toEqual({
            login: '[Auth] Login', 
            logout: '[Auth] Logout'
        })
     })
 })