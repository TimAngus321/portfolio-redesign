import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [colors, setColors] = useState<string[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const navigate = useNavigate();

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

  const handleImageHover = (image: string) => {
    setSelectedImage(image);
  };

  const getColors = (detectedColorCodes: string[] | null) => {
    setColors(detectedColorCodes);
  };

  // useEffect(() => {
  //   getColors()
  // }, [selectedImage]);

  // console.log(selectedImage)
  console.log(colors);

  return {
    updateSkillSet,
    skillSet,
    navigate,
    colors,
    setColors,
    getColors,
    handleImageHover,
    selectedImage,
  };
};

export default useSkills;
