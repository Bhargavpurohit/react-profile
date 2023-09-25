import  profile from "../data/profile";

export default function ProfileDetails() {
  return (
    <div className="profile-details">
    
      <p>  <i className="fa-solid fa-user" ></i> {profile.name}</p>
      <p><i className="fa-solid fa-briefcase"></i> {profile.position}</p>
      <p><i className="fa-solid fa-phone"></i> {profile.phone}</p>
      <p><i className="fa-solid fa-envelope"></i> {profile.email}</p>
    </div>
  );
}
