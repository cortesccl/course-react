import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState } from "../../fixtures/authStates";
import { testUserCredentials } from "../../fixtures/testUser";

describe('Pruebas en authSlice', () => {
    test('Debe de regresar el estado inicial', () => {
        expect(authSlice.getInitialState()).toEqual(initialState)
    })

    test('Debe de realizar un login', () => {
        const state = authSlice.reducer(initialState, onLogin(testUserCredentials))
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        })
    })

    test('Debe de realizar el logout', () => {
        const state = authSlice.reducer(authenticatedState, onLogout())
        // console.log(state)
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })

    test('Debe de realizar el logout con error', () => {
        const errorMessage = 'Credenciales no válidas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        // console.log(state)
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage
        })
    })

    test('Debe de Limpiar el mensaje del error', () => {
        const errorMessage = 'Credenciales no válidas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        const newState = authSlice.reducer(state, clearErrorMessage())
        expect(newState.errorMessage).toBe(undefined)
    })

    test('Debe de mostrar el estado onChecking', () => {
        const state = authSlice.reducer(authenticatedState, onChecking())
        // console.log(state)
        expect(state).toEqual({
            errorMessage: undefined,
            status: 'checking',
            user: {}
        })
    })
})