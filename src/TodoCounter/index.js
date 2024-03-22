import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }){
    return(
        <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
        </h1>
    );
  }

  export { TodoCounter };