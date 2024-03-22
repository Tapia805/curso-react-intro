import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva Tarea</label>
            <textarea placeholder="Ejemplo: Jugar futbol a la 7pm" value={newTodoValue} onChange={onChange} />
            <div type="" className="TodoForm-buttonContainer">
              <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
              <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };