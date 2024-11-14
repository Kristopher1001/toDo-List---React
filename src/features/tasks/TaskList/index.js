import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice.js";
import { Buttontoggledone, Buttonremove, List, Listitem, Content } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map((task) => (
                <Listitem
                    key={task.id}
                    hidden={task.done && hideDone}>
                    <Buttontoggledone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✓" : ""}
                    </Buttontoggledone>
                    <Content done={task.done}> {task.content}</Content>
                    <Buttonremove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Buttonremove>
                </Listitem>
            ))}
        </List>
    );
}

export default TasksList;