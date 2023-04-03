const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { SearchPage } = require("../../../heroes/pages/SearchPage")


const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}))

describe('Prueba en <SearchPage />', () => {

    beforeEach(() => jest.clearAllMocks())
    test('Debe de mostrarse correctamente ocn valores con defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar a Batman y el input con el valor del query string', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const inputValue = screen.getByRole('textbox')
        expect(inputValue.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('none')

    })

    test('Debe de mostrar un error si no encuentra el hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('')
        expect(screen.getByText('No hero with')).toBeTruthy()
    })

    test('Debe de llamar el navigate a la pantalla nueva', () => {
        
        const inputValue = 'superman'
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.change(input, {target: {name: 'searchText', value: inputValue}})

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${ inputValue }`)
    })
})