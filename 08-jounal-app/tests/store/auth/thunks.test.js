import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, login, logout } from "../../../store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../store/auth/thunks"
import { clearNotesLogout } from "../../../store/journal/journalSlice"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks())
    test('Debe invocar el checking credentials', async () => {
        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    })

    test('startGoogleSignIn debe de llamar checkingCredentials y login', async () => {

        const loginData = { ok: true, ...demoUser }
        await signInWithGoogle.mockResolvedValue( loginData)

        // thunk que queremos probar
        await startGoogleSignIn()( dispatch )

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login( loginData ))

    })

    test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async () => {

        const loginData = { ok: false, errorMessage: 'Un error en Google' }
        await signInWithGoogle.mockResolvedValue( loginData)

        // thunk que queremos probar
        await startGoogleSignIn()( dispatch )

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout( loginData.errorMessage ))

    })

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Éxito', async() => {

        const loginData = { ok: true, ...demoUser}
        const formData = { email: demoUser.email, password: '123456'}

        await loginWithEmailPassword.mockResolvedValue( loginData)

        // thunk que queremos probar
        await startLoginWithEmailPassword(formData)( dispatch )

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login( loginData ))

    })

    test('startLogout debe de llamar logoutFirebase, clearNotes y Logout', async() => { 
        
        await startLogout()(dispatch)
        expect(logoutFirebase).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith (clearNotesLogout())
        expect(dispatch).toHaveBeenCalledWith (logout())

     })
})