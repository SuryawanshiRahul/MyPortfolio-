import about from "../data/about";
import services from "../data/services";

function About() {
  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">
          {about.title}
        </h2>
      </header>

      <section className="about-text">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">
          What I Like to Do
        </h3>

        <ul className="service-list">
          {services.map((service) => (
            <li
              key={service.title}
              className="service-item"
            >
              <div className="service-icon-box">
                <img
                  src={service.icon}
                  alt={service.title}
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">
                  {service.title}
                </h4>

                <p className="service-item-text">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default About;