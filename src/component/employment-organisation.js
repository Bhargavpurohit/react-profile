import "../css/employment/employment-organisation.css";
export default function EmploymentOrganisation(prop) {
  const org = prop.organisation;
  const endDate = org.isPresent ? "Present" : `${org.endMonth}-${org.endYear}`;
  const skillList = org.skills.map((s) => {
    return <span className="skill-list"> {s} </span>;
  });
  const projects = prop.projects.map((p) => {
    if (p.companyId === org.id) {
      return <span className="skill-list"> {p.name} </span>;
    }
  });

  return (
    <div className="employment-organisation">
      <div className="organisation-name">
        <h1>
          {" "}
          <i className="fa-solid fa-building"></i> {org.name}
        </h1>
      </div>
      <div className="organisation-designation">
        <h4>
          {" "}
          <i className="fa-solid fa-briefcase"></i> {org.designation}
        </h4>
      </div>
      <div className="organisation-duration">
        <p>
          Worked From {org.startMonth}-{org.startYear} To {endDate}{" "}
        </p>
      </div>
      <h4>Skills</h4>
      <div className="skills">{skillList}</div>
      <h4>Projects</h4>
      <div className="skills">{projects}</div>
    </div>
  );
}
