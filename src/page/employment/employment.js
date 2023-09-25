import EmploymentHeader from "../../component/employment-header";
import EmploymentOrganisation from "../../component/employment-organisation";
import EmploymentProject from "../../component/employment-project";
import "../../css/employment/employment.css";
import profile from "../../data/profile.json";
import { useState } from "react";

export default function Employment() {
  let listItems = <div></div>;
  const [currentTab, setCurrentTab] = useState("organisation");
  if (currentTab === "project") {
    listItems = profile.projects.map((p) => (
      <EmploymentProject key={p.id} project={p}></EmploymentProject>
    ));
  } else {
    listItems = profile.organisations.map((p) => (
      <EmploymentOrganisation
        key={p.id}
        organisation={p}
        projects={profile.projects}
      ></EmploymentOrganisation>
    ));
  }
  return (
    <div className="employment">
      <EmploymentHeader tab={setCurrentTab}></EmploymentHeader>
      {listItems}
    </div>
  );
}
