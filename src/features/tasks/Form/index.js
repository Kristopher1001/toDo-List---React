import React, { useState, useRef } from "react";
import { Wrapper, Input, Newtaskbutton } from "./styled.js";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!newTaskContent || !newTaskContent.trim()) {
            return;
        };

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
    }));

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