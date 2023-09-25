import * as profile from "../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProfileDetails() {
  return (
    <div className="profile-details">
      <FontAwesomeIcon icon="fa-regular fa-user" style={{ color: "#4ec2ca" }} />
      <p>{profile.name}</p>
      <p>{profile.position}</p>
      <p>{profile.phone}</p>
      <p>{profile.email}</p>
    </div>
  );
}
