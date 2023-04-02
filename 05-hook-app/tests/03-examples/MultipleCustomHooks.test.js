import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"
import { mockComponent } from "react-dom/test-utils"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en MultipleCustomHooks', () => { 
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 0,
        increment: mockIncrement
    })

    beforeEach ( () => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render( <MultipleCustomHooks />)

        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Game of Thrones'))

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})

        expect (nextButton.disabled).toBeTruthy()
     })

     test('Debe de mostrar un quote', () => { 
        useFetch.mockReturnValue({
            data:   [
                {
                    "name": "Jon Snow",
                    "slug": "jon",
                    "house": {
                        "slug": "stark",
                        "name": "House Stark of Winterfell"
                    },
                    "quotes": [
                        "If I fall, don't bring me back.",
                        "There is only one war that matters. The Great War. And it is here.",
                        "Love is the death of duty.",
                        "Everything before the word \"but\" is horseshit.",
                        "The war is not over. And I promise you, friend, the true enemy won't wait out the storm. He brings the storm."
                    ]
                }
            ],
            isLoading: false,
            hasError: null
        })
        render( <MultipleCustomHooks />)
        expect( screen.getByText("If I fall, don't bring me back.")).toBeTruthy()
        expect( screen.getByText("Jon Snow (House Stark of Winterfell)")).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Next Quote'})
        expect(nextButton.disabled).toBeFalsy()
        // screen.debug()
      })

      test('Debe de llamar la función incrementar', () => {         
        useFetch.mockReturnValue({
            data:   [{ 
                            "name": "Jon Snow",
                            "slug": "jon",
                            "house": {
                                "slug": "stark",
                                "name": "House Stark of Winterfell"
                            },
                            "quotes": [
                                "If I fall, don't bring me back.",
                                "Holi"
                            ]
                        }],
            isLoading: false,
            hasError: null
        })

        render( <MultipleCustomHooks />)
        const nextButton = screen.getByRole('button', { name: 'Next Quote'})
        fireEvent.click( nextButton );

        expect (mockIncrement).toHaveBeenCalled()
      })
 })