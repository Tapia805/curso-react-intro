import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import React from "react";
import "./TodoItem.css";

function TodoItem(props){
  return(
  <li className="TodoItem">
    <CompleteIcon
      className="Complet" 
      completed={props.completed} 
      onComplete={props.onComplete} 
    />
    <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>
      {props.text}
    </p>
    <DeleteIcon 
      onDelete={props.onDelete} 
    />
  </li>
  );
}
export{TodoItem};