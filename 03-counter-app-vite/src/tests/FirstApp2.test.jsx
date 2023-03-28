import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () => { 
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    test('Debe de hacer match con el snapshot', () => {
        

        const {container} = render( <FirstApp title={ title }/> )

        expect ( container ).toMatchSnapshot();

    });

    test('Debe mostrar el mensaje "Hola, soy Goku', () => {
        const {container} = render( <FirstApp title={ title }/> )
        // screen.debug();
        expect ( screen.getByText(title) ).toBeTruthy();


    });

    test('Debe mostrar el título en un h1', () => {
        render( <FirstApp title={ title } /> )
        
        expect ( screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

        // const h1 = container.querySelector('h1');   
        // expect(h1.innerHTML).toContain(title);



    });

    test('Debe mostrar el título en un h1', () => {
        render( 
            <FirstApp 
                title={ title } 
                subTitle= {subTitle}
            /> 
        );
        
        expect ( screen.getAllByText(subTitle).length).toBe(2);

    });
 });