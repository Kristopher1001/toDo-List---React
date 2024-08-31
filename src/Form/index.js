import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent);
    setNewTaskContent("");
   } 

return(
    <form className="form" onSubmit={onFormSubmit}>
        <input value={newTaskContent} 
        placeholder="Wpisz zadanie" 
        onChange={({target}) => setNewTaskContent(target.value)}
        className="form__input" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
    );
}

export default Form; 