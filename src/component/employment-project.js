import "../css/employment/employment-organisation.css";
export default function EmploymentProject(prop) {
  const project = prop.project;

  const skillList = project.skills.map((s) => {
    return <span className="skill-list"> {s} </span>;
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
      {/* <div className="organisation-duration">
        <p>
          Worked From {org.startMonth}-{org.startYear} To {endDate}{" "}
        </p>
      </div> */}
      <h4>Skills</h4>
      <div className="skills">{skillList}</div>
    </div>
  );
}
