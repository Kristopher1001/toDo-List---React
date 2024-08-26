import React from "react";
import "./style.css";

const Buttons = (props, hideDoneTasks, toggleHideDoneTasks) => (
    <div className="section__button">
        {props.tasks.length > 0 && (
            <React.Fragment>
                <button onClick={toggleHideDoneTasks} className="section__buttonToggle section__buttonToggle--hide"
                >
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
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

