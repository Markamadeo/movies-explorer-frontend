function Footer(props) {
  const footerLinksData = [
    { text: "Яндекс.Практикум", url: "https://praktikum.yandex.ru/" },
    { text: "Github", url: "https://github.com/yandex" },
    { text: "Linkedin", url: "https://ru-ru.facebook.com/yandex" },
  ];

  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__contact-container">
          <p className="footer__copyright">&copy; 2021</p>
          <ul className="footer__links-container">
            {footerLinksData.map((item, index) => {
              return (
                <li key={`footerLink${index}`} className="footer__link-item">
                  <a
                    className="footer__link"
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
        </div>
      </div>
    </section>
  );
}

export default Footer;
