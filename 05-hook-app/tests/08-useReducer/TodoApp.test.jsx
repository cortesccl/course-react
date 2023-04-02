const { render, screen } = require('@testing-library/react')
const { TodoApp } = require('../../src/08-useReducer')
const { useTodos } = require('../../src/hooks/useTodos')

jest.mock('../../src/hooks/useTodos')
describe('Pruebas en <TodoApp />', () => { 

    useTodos.mockReturnValue({
        todos: [
            {id:1, description: 'Todo #1', done: false},
            {id:2, description: 'Todo #2', done: true},
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(), 
        hangleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn(),
    })
    test('Debe de mostrar el componente de forma correcta', () => { 
        render( <TodoApp />)
        // screen.debug()
        expect(screen.getByText('Todo #1')).toBeTruthy()
        expect(screen.getByText('Todo #2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()

        expect(screen.getByRole('textbox').name).toBe('description')
        // console.log(screen.getByRole('textbox').name)
     })
 })