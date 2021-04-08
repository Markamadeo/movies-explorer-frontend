import SectionTitle from "../SectionTitle/SectionTitle";

function Techs(props) {
  const techs = [
    { text: "HTML" },
    { text: "CSS" },
    { text: "JS" },
    { text: "React" },
    { text: "Git" },
    { text: "Express.js" },
    { text: "mongoDB" },
  ];

  return (
    <section className="techs main__section">
      <SectionTitle titleText="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__items-container">
        {techs.map((item, index) => {
          return (
            <li key={`techItem${index.toString()}`} className="techs__item">
              <p className="techs__item-text">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Techs;
