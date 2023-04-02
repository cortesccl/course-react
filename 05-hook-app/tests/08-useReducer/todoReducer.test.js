import { todoReducer } from "../../src/08-useReducer"

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('Debe de regresar el estado inicial', () => { 
        
        const newState = todoReducer(initialState, {})
        expect (newState).toBe( initialState)

     })    

     test('Debe agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)
        
        expect (newState).toContain(action.payload)
      })

      test('Debe eliminar un todo', () => { 
            const action2 = {
                type: '[TODO] Remove Todo',
                payload: 1
            }

            const newState = todoReducer(initialState, action2)            
            expect (newState.length).toBe(0)
       })

       test('Debe de realizar el Toggle del todo', () => { 
            const action = {
                type: '[TODO] Toggle Todo',
                payload: 1
            }

            const newState = todoReducer(initialState, action)            
            expect (newState[0].done).toBeTruthy()

            const newState2 = todoReducer(newState, action)            
            expect (newState2[0].done).toBeFalsy()
        })
})