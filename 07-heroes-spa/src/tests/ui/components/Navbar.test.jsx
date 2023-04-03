const { render, screen, fireEvent } = require("@testing-library/react")
const { AuthContext } = require("../../../auth/context/AuthContext")
const { MemoryRouter } = require("react-router-dom")
const { Navbar } = require("../../../ui/components/Navbar")

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

describe('Pruebas en <Navbar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Sara'
        },
        logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks())

    test('debe de mostrar el nombre del usuario', () => { 
        render(
            <AuthContext.Provider value=  {contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        ) 
        expect(screen.getByText('Sara')).toBeTruthy()
     })

     test('debe de llamar el logout y navigate cuando se hace click en el botón', () => { 
        render(
            <AuthContext.Provider value=  {contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        ) 
        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)

        expect (contextValue.logout).toHaveBeenCalled()
        expect (mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true})
     })
 })