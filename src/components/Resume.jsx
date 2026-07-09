import { MdSchool } from "react-icons/md";

import education from "../data/education";
import experience from "../data/experience";
import skills from "../data/skills";

function Resume() {
  return (
    <article className="resume active">

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="h2 article-title">
          Resume
        </h2>

        <a
          href="/Resume_RAHUL_SURYAWANSHI.pdf"
          className="download-btn"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </header>

      {/* Education */}

      <section className="timeline">

        <div className="title-wrapper">

          <div className="icon-box">
            <MdSchool />
          </div>

          <h3 className="h3">
            Education
          </h3>

        </div>

        <ol className="timeline-list">

          {education.map((item) => (

            <li
              key={item.title}
              className="timeline-item"
            >
              <h4 className="h4 timeline-item-title">
                {item.title}
              </h4>

              <span>{item.year}</span>

            </li>

          ))}

        </ol>

      </section>

      {/* Experience */}

      <section className="timeline">

        <div className="title-wrapper">

          <div className="icon-box">
            <MdSchool />
          </div>

          <h3 className="h3">
            Experience
          </h3>

        </div>

        <ol className="timeline-list">

          {experience.map((job) => (

            <li
              key={job.company}
              className="timeline-item"
            >

              <h4 className="h4 timeline-item-title">

                {job.role}

                {" | "}

                {job.company}

              </h4>

              <span>{job.duration}</span>

              <ul className="timeline-text">

                {job.points.map((point) => (

                  <li key={point}>
                    {point}
                  </li>

                ))}

              </ul>

            </li>

          ))}

        </ol>

      </section>

      {/* Skills */}

      <section className="skill">

        <h3 className="h3 skills-title">
          My Skills
        </h3>

        <ul className="skills-list content-card">

          {skills.map((skill) => (

            <li
              key={skill.name}
              className="skills-item"
            >

              <div className="title-wrapper">

                <h5 className="h5">
                  {skill.name}
                </h5>

                <data value={skill.value}>
                  {skill.value}%
                </data>

              </div>

              <div className="skill-progress-bg">

                <div
                  className="skill-progress-fill"
                  style={{
                    width: `${skill.value}%`,
                  }}
                />

              </div>

            </li>

          ))}

        </ul>

      </section>

    </article>
  );
}

export default Resume;