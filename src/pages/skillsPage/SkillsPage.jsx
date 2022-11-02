import { v4 } from "uuid";

import SkillCard from "../../components/skillCard/SkillCard";
import skillHelper from "../../helpers/skillHelper";

import "./SkillsPage.css";
import React from "react";

function SkillsPage() {
  return (
    <div className=" grid grid-cols-4 gap-10 mx-40 justify-items-center ">
      {skillHelper.map((skill) => (
        <SkillCard pValue={skill.Value} name={skill.name} key={v4()} />
      ))}
    </div>
  );
}

export default SkillsPage;
