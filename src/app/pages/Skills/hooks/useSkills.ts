import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, SkillColorsArr, skillColorsObj } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  // const [colors, setColors] = useState<string[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  // const [skillLogoColors, setSkillLogoColors] = useState<SkillColorsArr>({
  //   skillColors: [],
  // });
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
    // selectedImage = image;
    // console.log(skillLogoColors)

    // for (let i = 0; i < skillLogoColors?.length; i++) {
    //   if (skillLogoColors?.imgUrl[i] === image) {
    //   } else {
    //     // trigger animation
    //   }
    // }
    // console.log(skillLogoColors)
  };



  const getColors = (detectedColorCodes: string[] | null) => {
    setSkillLogoColors((prevState) => ({
      ...prevState,
      imgUrl: selectedImage,
      colors: detectedColorCodes,
    }));
  };
  
  console.log(skillLogoColors);

  return {
    updateSkillSet,
    skillSet,
    navigate,
    // colors,
    // setColors,
    getColors,
    handleImageHover,
    selectedImage,
  };
};

export default useSkills;
