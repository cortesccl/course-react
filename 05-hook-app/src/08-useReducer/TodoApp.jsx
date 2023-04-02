import { TodoAdd, TodoList } from ".";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, hangleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>
            <h1>TodoApp { todosCount }, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = {todos} 
                        onDeleteTodo= {handleDeleteTodo} 
                        onToggleTodo= {hangleToggleTodo}
                    />                    
                </div>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd onNewTodo={ handleNewTodo }/>
                
            </div>
        </>
    )
}
