const { render, screen } = require('@testing-library/react')
const { PrivateRoute } = require('../../heroes/routes/PrivateRoute')
const { AuthContext } = require('../../auth')
const { MemoryRouter, Routes, Route } = require('react-router-dom')


describe('Pruebas en <PrivateRoute />', () => {

    test('Debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect (localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman")
    })
})