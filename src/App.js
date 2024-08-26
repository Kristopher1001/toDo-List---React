import React, {useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "Nauczyć się Reacta", done: false },
      { id: 2, content: "Stworzyć aplikację", done: true },
    ],
  )

  const toggleHideDoneTasks = () => {
    setHideDone (hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(tasks => tasks.id !== id));

  } 

  return (
    <body>
      <Container>
        <Header title="Lista zadań"></Header>
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section title="Lista zadań" 
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask}/>}
        extraHeaderContent= {<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDoneTasks={toggleHideDoneTasks}/>}
        />
      </Container>
    </body>
  );
}

export default App;
