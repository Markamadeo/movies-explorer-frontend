import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject(props) {
  const aboutDescriptions = [
    {
      title: "Дипломный проект включал 5 этапов",
      description:
        "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
    },
    {
      title: "На выполнение диплома ушло 5 недель",
      description:
        "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
    },
  ];

  const aboutDuration = [
    { duration: "1 неделя", text: "Back-end" },
    { duration: "4 недели", text: "Front-end" },
  ];

  return (
    <section className="about-project main__section">
      <SectionTitle titleText="О проекте" />
      <ul className="about-project__descripton-container">
        {aboutDescriptions.map((item, index) => {
          return (
            <li key={`description${index.toString()}`} className="about-project__description-items">
              <h3 className="about-project__description-title">{item.title}</h3>
              <p className="about-project__description">{item.description}</p>
            </li>
          );
        })}
      </ul>
      <ul className="about-project__duration-container">
        {aboutDuration.map((item, index) => {
          return (
            <li key={`duration${index.toString()}`} className="about-project__duration-items">
              <p className="about-project__duration">
                {item.duration}
              </p>
              <p className="about-project__duration-text">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default AboutProject;
