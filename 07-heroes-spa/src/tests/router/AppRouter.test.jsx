import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth'
import { AppRouter } from '../../router/AppRouter'

describe('Pruebas en <AppRouter />', () => {
    test('Debe de mostrar el login si no está autenticado', () => {
        const contextValue = {
            logged: false,
            user: {
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(2);
    })

    test('Debe de mostrar el componente Marvel si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel Comics').length ).toBeGreaterThanOrEqual(1);
    })
})