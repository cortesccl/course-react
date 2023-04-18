import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { calendarApi } from '../../src/api';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { authSlice } from '../../src/store/';
import { initialState, notAuthenticatedState } from '../fixtures/authStates';
import { testUserCredentials } from '../fixtures/testUser';



const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer,
        },
        preloadedState: {
            auth: { ...initialState }
        }
    })
}

describe('Pruebas para el useAuthStore', () => {
    test('Debe de regresar los valores por defecto', () => {
        const mockStore = getMockStore({ ...initialState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })
        // console.log(result.current)
        expect(result.current).toEqual({
            errorMessage: undefined,
            status: 'checking',
            user: {},
            checkAuthToken: expect.any(Function),
            startLogin: expect.any(Function),
            startLogout: expect.any(Function),
            startRegister: expect.any(Function)
        })
    })

    test('startLogin debe de realizar el login de forma correcta', async () => {
        localStorage.clear()
        const mockStore = getMockStore({ ...notAuthenticatedState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })

        await act(async () => {
            await result.current.startLogin(testUserCredentials)
        })

        const { errorMessage, status, user } = result.current
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test User', uid: '643e42f62327cb3b04503674' }
        })

        expect(localStorage.getItem('token')).toEqual(expect.any(String))
        expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String))
    })

    test('startLogin debe fallar la autenticación', async () => {
        localStorage.clear()
        const mockStore = getMockStore({ ...notAuthenticatedState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })

        await act(async () => {
            await result.current.startLogin({ email: 'algo@google.com', password: '123456' })
        })

        const { errorMessage, status, user } = result.current
        expect(localStorage.getItem('token')).toBe(null)
        expect(localStorage.getItem('token-init-date')).toBe(null)
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'Credenciales incorrectas',
            status: 'not-authenticated',
            user: {}
        })
        
        await waitFor( 
            () => expect( result.current.errorMessage ).toBe(undefined)
        )
        
    })

    test('startRegister debería registrar un nuevo usuario', async () => {
        const newUser = { email: 'algo@google.com', password: '123456', name: 'Test User 2' }
        const mockStore = getMockStore({ ...notAuthenticatedState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })

        const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
            data: {
                ok: true,
                uid: 'ALGUN-UID',
                name: 'Test User',
                token: 'ALGUN-TOKEN'
            }
        })
        await act(async () => {
            await result.current.startRegister(newUser)
        })

        const { errorMessage, status, user } = result.current
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test User', uid: 'ALGUN-UID' }
        })
        spy.mockRestore()
    })

    test('startRegister debe fallar la creación', async () => {
        const mockStore = getMockStore({ ...notAuthenticatedState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })

        await act(async () => {
            await result.current.startRegister(testUserCredentials)
        })

        const { errorMessage, status, user } = result.current
        // console.log({ errorMessage, status, user })
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'El email introducido ya existe en BBDD',
            status: 'not-authenticated',
            user: {}
        })
        // console.log({ errorMessage, status, user })

    })

    test('checkAuthToken debe de fallar si no hy un token', async () => {
        const mockStore = getMockStore({ ...initialState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })

        await act(async () => {
            await result.current.checkAuthToken()
        })

        const { errorMessage, status, user } = result.current
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'not-authenticated',
            user: {}
        })
    })
    test('checkAuthToken debe autenticar el usuario si hay un token', async () => {
        const { data } = await calendarApi.post('/auth', testUserCredentials)
        localStorage.setItem('token', data.token)
        const mockStore = getMockStore({ ...initialState })

        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}> {children} </Provider>
        })

        await act(async () => {
            await result.current.checkAuthToken()
        })

        const { errorMessage, status, user } = result.current
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test User', uid: '643e42f62327cb3b04503674' }
        })
    })

    
})