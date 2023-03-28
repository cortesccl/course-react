import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe('Pruebas en <CounterApp value={100} />', () => { 
    const initialValue = 10;

    test('Debe de hacer match con el snapshot', () => {
        

        const {container} = render( <CounterApp value= { initialValue }/> )

        expect ( container ).toMatchSnapshot();

    });

    test('Debe mostrar el valor inicial de 100', () => {
        render( <CounterApp value={ initialValue }/> )
        // screen.debug();
        expect ( screen.getByText(10) ).toBeTruthy();
        // expect ( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100');

    });

    test('Debe incrementar con el botón +1', () => {
        render( <CounterApp value={ initialValue } /> )
        
        fireEvent.click( screen.getByText('+1') )
        expect ( screen.getByText('11')).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', () => {
        render( <CounterApp value={ initialValue } /> )
        
        fireEvent.click( screen.getByText('-1') )
        expect ( screen.getByText('9')).toBeTruthy();
    });

    test('Debe funcionar el bolón Reset', () => {
        render( <CounterApp value={ initialValue } /> )
        
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );

        expect ( screen.getByText(initialValue)).toBeTruthy();
    });

 });