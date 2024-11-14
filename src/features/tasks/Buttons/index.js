import React from "react";
import { Position, Buttonhide, Buttontoggle } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice.js";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Position>
      {tasks.length > 0 && (
        <React.Fragment>
          <Buttonhide onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Buttonhide>
          <Buttontoggle
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Buttontoggle>
        </React.Fragment>
      )}
    </Position>
  );
};
export default Buttons;
