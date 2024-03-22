import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setsearchValue, loading }){
    return(
        <input
         className="TodoSearch"
         placeholder="Busca tu tarea ..." 
         value={searchValue} 
         onChange={(event) =>{
            setsearchValue(event.target.value)
         }}
         disabled={loading}
       />
    );
  }

  export { TodoSearch };