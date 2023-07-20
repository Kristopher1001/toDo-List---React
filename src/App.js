import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Nauczyć się Reacta", done: false },
  { id: 2, content: "Stworzyć aplikację", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <body>
      <Container>
        <Header title="Lista zadań"></Header>
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section title="Lista zadań" 
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent= {<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </Container>
    </body>
  );
}

export default App;
