import { useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);

  const clearState = () => {
    const currentState: skills[] = [];
    setSkillSet(currentState);
  };

  const updateSkillSet = (skillSet: skills[]) => {
    clearState();
    setTimeout(() => {
      setSkillSet(skillSet);
    }, 500);
  };

  const navigate = useNavigate();

  return {
    updateSkillSet,
    skillSet,
    navigate
  };
};

export default useSkills;
