import React from "react";
import "./style.css";

const Buttons = (props, hideDone, toggleHideDone, setAllDone) => (
    <div className="section__button">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button onClick={toggleHideDone} className="section__buttonToggle section__buttonToggle--hide"
                >
                    {!hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    onClick={setAllDone}
                    className="section__buttonToggle"
                    disabled={props.tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;

