import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, skillColorsObj } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [selectedImage, setSelectedImage] = useState<string>("/static/media/javascript-original.4c1b5332.svg");
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

  const sleep = async (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  const updateSkillSet = async (skillSet: skills[]) => {
    clearState();
    await sleep(500);
    setSkillSet(skillSet);
  };

  const handleImageHover = (e: MouseEvent | TouchEvent, image: string) => {
    e.preventDefault()
    console.log('hover on card ran')
    setSelectedImage(image);
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
