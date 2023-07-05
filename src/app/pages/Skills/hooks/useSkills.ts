import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, skillColorsObj } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [selectedImage, setSelectedImage] = useState<string>("");
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
  };

  const getColors = (detectedColorCodes: string[] | null) => {
    setSkillLogoColors((prevState) => ({
      ...prevState,
      imgUrl: selectedImage,
      colors: detectedColorCodes,
    }));
  };


  useEffect(() => {
    
  },[skillLogoColors]);

  
  console.log(skillLogoColors);

  return {
    updateSkillSet,
    skillSet,
    navigate,
    getColors,
    handleImageHover,
    selectedImage,
  };
};

export default useSkills;
