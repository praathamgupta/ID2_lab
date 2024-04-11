import React from "react";

interface Props {
  src: string;
  title: string;
}

const ProjectCard = ({ src, title }: Props) => {
  const imageSize = { width: "400px", height: "400px" }; // Adjust size as needed

  return (
    <div className="relative overflow-hidden rounded-full shadow-lg" style={imageSize}>
      <div className="rounded-full overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="relative p-4 text-center">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
