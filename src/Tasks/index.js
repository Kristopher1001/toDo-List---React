import { Buttontoggledone, Buttonremove, List, Listitem, Content } from "./styled.js";

const Tasks = ({ tasks, removeTask, hideDone, toggleTaskDone }) => (
    <List>
        {tasks.map((task) => (
            <Listitem
                key={task.id}
                hidden={task.done && hideDone}>
                <Buttontoggledone onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </Buttontoggledone>
                <Content done={task.done}> {task.content}</Content>
                <Buttonremove onClick={() => removeTask(task.id)}>
                    🗑
                </Buttonremove>
            </Listitem>
        ))}
    </List>
);

export default Tasks;