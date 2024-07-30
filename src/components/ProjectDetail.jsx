import React from 'react';
import { useParams } from 'react-router-dom';
import project from "../data/data.json";

function ProjectDetail() {
  const { id } = useParams();
  const projectDetail = project.find(p => p.id === parseInt(id, 1));

  if (!projectDetail) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-section">
      <h1>{projectDetail.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>{data.description}</p>
      <NavLink to='/project'>Back to Projects</NavLink>
    </div>
  );
}

export default ProjectDetail;
