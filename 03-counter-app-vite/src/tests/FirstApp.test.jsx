import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    test('Debe de hacer match con el snapshot', () => {
        const title = 'Hola, soy Goku';

        const {container} = render( <FirstApp title={ title }/> )

        expect ( container ).toMatchSnapshot();

    });

    test('Debe mostrar el título en un <h1>', () => {
        const title = 'Hola, soy Goku';
        const {container, getByText, getByTestId} = render( <FirstApp title={ title }/> )
        
        expect ( getByText(title) ).toBeTruthy();
        expect (getByTestId('test-title').innerHTML).toBe(title)

        // const h1 = container.querySelector('h1');   
        // expect(h1.innerHTML).toContain(title);



    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const {getAllByText} = render( <FirstApp title={ title } subTitle= {subTitle} /> )
        
        expect ( getAllByText(subTitle).length ).toBe(2);

        // const h1 = container.querySelector('h1');   
        // expect(h1.innerHTML).toContain(title);



    });
 });