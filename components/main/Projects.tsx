import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Team
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="flex flex-col items-center">
          <ProjectCard src="/utsav.jpg" title="Modern Next.js Portfolio" />
          <p className="text-white font-bold text-lg">Utsav Mandal</p>

        </div>
        <div className="flex flex-col items-center" style={{ marginLeft: "80px", marginRight: "80px" }}>
          <ProjectCard src="/prxtham1.jpg" title="Interactive Website Cards" />
          <p className="text-white font-bold text-lg">Pratham Gupta</p>
        </div>
        <div className="flex flex-col items-center">
          <ProjectCard src="/samyak.jpg" title="Space Themed Website" />
          <p className="text-white font-bold text-lg">Samyak Panda</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
