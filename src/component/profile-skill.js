import * as profile from "../data/profile";
export default function ProfileSkills() {
  const listItems = profile.skills.map((p) => <li key={p}>{p}</li>);
  return (
    <div className="profile-skills">
      <ul>{listItems}</ul>
    </div>
  );
}
