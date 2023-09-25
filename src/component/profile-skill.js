import  profile from "../data/profile";
export default function ProfileSkills() {
  const listItems = profile.skills.map((p) => <li key={p}>{p}</li>);
  return (
    <div className="profile-skills">
      <hr></hr>
      <h3> <i className="fa-solid fa-asterisk"></i> Skills</h3>
      <ul>{listItems}</ul>
    </div>
  );
}
