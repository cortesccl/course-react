const { render, screen } = require('@testing-library/react')
const { PublicRoute } = require('../../heroes/routes/PublicRoute')
const { AuthContext } = require('../../auth')
const { MemoryRouter, Routes, Route } = require('react-router-dom')


describe('Pruebas en <PublicRoute />', () => {
    test('Debe de mostrar el children si  no está autenticado', () => {

        const contextValue = {
            logged: false,
        }
        render(
            <AuthContext.Provider value={contextValue} >
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        // screen.debug()
        expect(screen.getByText('Ruta Pública')).toBeTruthy()
    })

    test('Debe de navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect (screen.getByText('Página Marvel')).toBeTruthy()     
    })
})