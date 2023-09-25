import "../css/employment/employment-header.css";
export default function EmploymentHeader(props) {
  return (
    <div className="employment-header">
      <div className="employment-header-button">
        <button onClick={() => props.tab("organisation")}>Organisation</button>
        <button onClick={() => props.tab("project")}>Projects</button>
      </div>
    </div>
  );
}
