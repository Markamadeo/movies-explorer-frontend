function Portfolio(props) {
  const portfolioLinks = [
    {
      text: "Статичный сайт",
      url: "https://github.com/Markamadeo/how-to-learn",
    },
    {
      text: "Адаптивный сайт",
      url: "https://github.com/Markamadeo/russian-travel",
    },
    {
      text: "SPA",
      url: "https://github.com/Markamadeo/react-mesto-api-full",
    },
  ];

  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links-container">
        {portfolioLinks.map((item, index) => {
          return (
            <li key={`portfolioLink${index}`} className="portfolio__item">
              <a
                className="porfolio__link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Portfolio;
