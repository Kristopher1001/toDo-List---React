import React from "react";
import { Position, Buttonhide, Buttontoggle } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Position>
    {tasks.length > 0 && (
      <React.Fragment>
        <Buttonhide onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Buttonhide>
        <Buttontoggle
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Buttontoggle>
      </React.Fragment>
    )}
  </Position>
);

export default Buttons;
