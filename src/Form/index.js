import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent || !newTaskContent.trim()) {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input value={newTaskContent}
                placeholder="Wpisz zadanie"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
                autoFocus
                className="form__input" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form; 