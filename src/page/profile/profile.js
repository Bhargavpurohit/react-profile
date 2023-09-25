import "../../css/profile/profile.css";
import ProfileDetails from "../../component/profile-details";
import ProfileImage from "../../component/profile-image";
import ProfileSkills from "../../component/profile-skill";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileImage> </ProfileImage>
      <ProfileDetails></ProfileDetails>
      <ProfileSkills></ProfileSkills>
    </div>
  );
}
