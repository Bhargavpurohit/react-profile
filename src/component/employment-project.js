import "../css/employment/employment-organisation.css";
export default function EmploymentProject(prop) {
  const project = prop.project;
  const endDate = project.isPresent
    ? "Present"
    : `${project.endMonth}-${project.endYear}`;
  const skillList = project.skills.map((s) => {
    return <span className="skill-list"> {s} </span>;
  });
  const roleList = project.tasks.map((t) => {
    return <li>{t}</li>;
  });
  return (
    <div className="employment-organisation">
      <div className="organisation-name">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <h1>
            <i className="fa-solid fa-building"></i> {project.name}
          </h1>
        </a>
      </div>
      <div className="organisation-designation">
        <h4>
          <i className="fa-solid fa-briefcase"></i> {project.designation}
        </h4>
      </div>
      <div className="organisation-duration">
        <p>
          Worked From {project.startMonth}-{project.startYear} To {endDate}
        </p>
      </div>
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      <div className="project-description">
        <h4>Role:</h4>
        {roleList}
      </div>
      <h4>Skills</h4>
      <div className="skills">{skillList}</div>
    </div>
  );
}
