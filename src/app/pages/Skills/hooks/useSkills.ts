import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, skillColorsObj } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [skillLogoColors, setSkillLogoColors] = useState<skillColorsObj>({
    imgUrl: "",
    colors: [],
  });

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
    console.log("hovered ", image);
  };

  const getColors = (detectedColorCodes: string[]) => {
    setSkillLogoColors({
      imgUrl: selectedImage,
      colors: detectedColorCodes,
    });
  };

  // debug skillColorEffect
  // useEffect(() => {
  //   console.log(skillLogoColors);
  // }, [skillLogoColors]);

  return {
    updateSkillSet,
    skillSet,
    navigate,
    getColors,
    handleImageHover,
    selectedImage,
    skillLogoColors,
    setSelectedCard,
    selectedCard,
  };
};

export default useSkills;
