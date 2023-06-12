import { useState } from "react";
import languages from "../languages";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<any>(languages);

  const clearState = () => {
    let currentState = {};
    setSkillSet(currentState);
  };

  const updateSkillSet = (skillSet: any) => {
    clearState();
    setTimeout(() => {
      setSkillSet(skillSet);
    }, 500);
  };

  return {
    updateSkillSet,
    skillSet,
  };
};

export default useSkills;
