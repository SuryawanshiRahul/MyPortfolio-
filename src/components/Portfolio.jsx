import { useMemo, useState } from "react";

import projects from "../data/projects";
import portfolioCategories from "../data/portfolioCategories";

import ProjectCard from "./ProjectCard";
import PortfolioFilter from "./PortfolioFilter";
import PortfolioSelect from "./PortfolioSelect";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
  selectedCategory === "all"
    ? projects
    : projects.filter(
        (project) =>
          project.category === selectedCategory
      );

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">
          Portfolio
        </h2>
      </header>

      <section className="projects">

        <PortfolioFilter
          categories={portfolioCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <PortfolioSelect
          categories={portfolioCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </ul>

      </section>
    </article>
  );
}

export default Portfolio;