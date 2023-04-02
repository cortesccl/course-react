import { useForm } from "../hooks"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSubmit = (event) => {
        event.preventDefault()
        if (description.length <= 1) return;
        const newTodo = {
            description: description,
            id: new Date().getTime(),
            done: false,
        }

        onNewTodo && onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <>    
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
