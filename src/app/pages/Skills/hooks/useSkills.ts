import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills } from "../types/skillsetType";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [colors, setColors] = useState<string[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const skillLogoColors: object = {};
  // let selectedImage: string = '';
  // let colors: string[] | null = null;

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
    console.log(selectedImage)
    // getColors()
  };

  // Seems to get colours once then never again perhaps store in array and refer back if needed
  // e.g create object with key image url and colours as values 
  // inside handleImageHover if image === something in the array do the animation function if return as
  // get color would then run as intended


  const getColors = (detectedColorCodes: string[] | null) => {
    setColors(detectedColorCodes);
    console.log(detectedColorCodes)
    console.log(colors);
  };

  // useEffect(() => {
  //   getColors()
  // }, [selectedImage]);

  // console.log(selectedImage)
  // console.log(colors);

  return {
    updateSkillSet,
    skillSet,
    navigate,
    colors,
    // setColors,
    getColors,
    handleImageHover,
    selectedImage,
  };
};

export default useSkills;
