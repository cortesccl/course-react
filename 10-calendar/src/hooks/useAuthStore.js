import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout, onRegister } from '../store'


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth)
    const dispatch = useDispatch()

    /** Proceso de Login */
    const startLogin = async({ email, password }) => {
        dispatch( onChecking())

        try {
            const { data } = await calendarApi.post('/auth', { email, password})
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( onLogin({ name: data.name, uid: data.uid}))
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch( clearErrorMessage())
            }, 10)
        }
    }
    
    /** Proceso de Registro */
    const startRegister = async({ email, name, password }) => {
        dispatch( onChecking())

        try {
            const { data } = await calendarApi.post('/auth/new', { email, name, password })            
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( onLogin({ name: data.name, uid: data.uid}))
            
        } catch (error) {
            dispatch( onLogout(error.response.data?.msg || '--'))
            setTimeout(() => {
                dispatch( clearErrorMessage())
            }, 10)
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if ( !token ) return dispatch( onLogout('Token expiró') )

        try {
            const { data } = await calendarApi.get('/auth/renew')
            console.log( {data} )
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( onLogin({ name: data.name, uid: data.uid }) )
        } catch (error) {
            localStorage.clear()
            return dispatch( onLogout() )
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch( onLogout() )
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }
}