import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, skillColorsObj } from "../types/skillsetType";
import Vibrant from 'node-vibrant';


const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [selectedImage, setSelectedImage] = useState<string>("/static/media/javascript-original.4c1b5332.svg");
  const [skillLogoColors, setSkillLogoColors] = useState<skillColorsObj>({
    imgUrl: "/static/media/html5-original.8664168d5bc90b1a24396f85aadbf623.svg",
    colors: ['#e64f24', '#fcb494', '#77240d', '#892a0f', '#943004', '#892a0f'],
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

  const handleImageHover = (image: string) => {
    setSelectedImage(image);
  };

  const getColorPalette = async (image: string) => {
    setSelectedImage(image);
    const getColors = await Vibrant.from(image).getPalette();
    console.log(getColors)
    Object.keys
  //   setSkillLogoColors({...skillLogoColors, 
  //   imgUrl: selectedImage,
  //   colors: getColors
  // })
  }

  // const getColors = (detectedColorCodes: string[]) => {
  //   setSkillLogoColors({ ...skillLogoColors,
  //     imgUrl: selectedImage,
  //     colors: detectedColorCodes,
  //   });
  // };

  // debug skillColorEffect
  // useEffect(() => {
  //   console.log(skillLogoColors);
  // }, [skillLogoColors]);

  return {
    updateSkillSet,
    skillSet,
    navigate,
    // getColors,
    handleImageHover,
    // selectedImage,
    skillLogoColors,
    getColorPalette
  };
};

export default useSkills;
