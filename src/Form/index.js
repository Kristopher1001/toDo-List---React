import React, { useState } from "react";
import { Wrapper, Input, Newtaskbutton } from "./styled.js";

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
        <Wrapper
        onSubmit={onFormSubmit}>
            <Input value={newTaskContent}
                placeholder="Wpisz zadanie"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
                autoFocus
                className="form__input" />
            <Newtaskbutton className="form__button">Dodaj zadanie</Newtaskbutton>
        </Wrapper>
    );
}

export default Form; 