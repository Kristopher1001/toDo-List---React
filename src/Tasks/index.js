import "./style.css";

const Tasks = (props, removeTask, toggleTaskDone) => (
    <ul className="tasks">
    {props.tasks.map((task) => (
        <li 
        className={`tasks__item task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""}`} key={task.id}>
            <button onClick={() => toggleTaskDone(task.id)} className="tasks__button tasks__button--toggleDone">
            {task.done ? "✓" : ""}
            </button>
            <span className={`tasks__content ${task.done} ? " tasks__content--done" : ""`}> {task.content} </span>
            <button onClick={() => removeTask(task.id)} className="tasks__button tasks__button--remove">
            🗑
            </button>
        </li>
    ))}
    </ul>
);

export default Tasks;