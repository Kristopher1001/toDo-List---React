import React, { useState, useRef } from "react";
import { Wrapper, Input, Newtaskbutton } from "./styled.js";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null)

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent || !newTaskContent.trim()) {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <Wrapper
        onSubmit={onFormSubmit}>
            <Input 
                ref={inputRef}
                value={newTaskContent}
                placeholder="Wpisz zadanie"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required />
            <Newtaskbutton>Dodaj zadanie</Newtaskbutton>
        </Wrapper>
    );
}

export default Form; 