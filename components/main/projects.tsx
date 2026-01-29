import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1
        className="text-[56px] md:text-[72px] font-bold text-white py-20"
        style={{
          textShadow:
            "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #7042f8, 0 0 40px #7042f8, 0 0 80px #0ff",
        }}
      >
        Mes projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
