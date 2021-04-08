import SectionTitle from "../SectionTitle/SectionTitle";
import profilePhoto from "../../images/about-me-profile-photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(props) {
  const socialLinks = [
    {
      linkText: "Linkedin",
      link: "https://www.linkedin.com/in/артем-кулаков-206b9176/",
    },
    { linkText: "Github", link: "https://github.com/Markamadeo" },
  ];

  return (
    <section className="about-me main__section">
      <SectionTitle titleText="Студент" />
      <article className="about-me__container">
        <div className="about-me__text-items">
          <h2 className="about-me__title-name">Артём</h2>
          <p className="about-me__short-description">
            Веб-разработчик, 32 года
          </p>
          <p className="about-me__full-description">
            Я родился и живу в Новосибирске, закончил инженерный факультет НЭМК.
            У меня есть жена и 2-е замечательных детей. Я очень люблю сериалы
            Netflix, а ещё увлекаюсь спортом и видеоиграми. Недавно начал
            кодить. С 2020 года активно занимаюсь изучением веб-разработки и
            технологий с ними связанных. После того, как пройду курс по
            веб-разработке от Яндекс.Практикум, обязательно устроюсь
            веб-разработчиком и начну свой путь в IT.
          </p>
          <ul className="about-me__social-links-container">
            {socialLinks.map((item, index) => {
              return (
                <li
                  key={`socialLink${index}`}
                  className="about-me__social-item"
                >
                  <a
                    className="about-me__social-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.linkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className="about-me__profile-photo"
          src={profilePhoto}
          alt="Моя фотография для портфолио"
        />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
