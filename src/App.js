import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Nauczyć się Reacta", done: false },
  { id: 2, content: "Zjeść kolację", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <body>
      <Container>
        <Header title="Lista zadań"></Header>
        <section title="Dodaj nowe zadanie" body={<Form />} />
        <section title="Lista zadań" 
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent= {<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
        <section className="section">
          <div className="section__layout">
            <h2 className="section__header">Lista zadań</h2>
            <div className="section__button">
              <button className="section__buttonToggle section__buttonToggle--hide">Ukryj ukończone</button>
              <button className="section__buttonToggle">Ukończ wszystkie</button>
            </div>
          </div>
          <div className="section__body">
            
          </div>
        </section>
      </Container>
    </body>
  );
}

export default App;
