import "./style.css"; 

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
          <div className="section__layout">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
            <div className="section__button">
              <button className="section__buttonToggle section__buttonToggle--hide">Ukryj ukończone</button>
              <button className="section__buttonToggle">Ukończ wszystkie</button>
            </div>
          </div>
          <div className="section__body">
            {body}
          </div>
        </section>
);

export default Section;