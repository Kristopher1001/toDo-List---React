import Form from "./Form/index.js";
import TasksList from "./TaskList/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from '../../useTasks.js'

function Tasks() {
  
  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <body>
      <Container>
        <Header title="Lista zadań"></Header>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={
            <TasksList
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </body>
  );
}

export default Tasks;
