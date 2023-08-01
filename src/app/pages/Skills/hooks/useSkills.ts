import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, waterfallObj } from "../types/skillsetType";
import Vibrant from "node-vibrant";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>(languages);
  const [selectedImage, setSelectedImage] = useState<string>(
    "/static/media/javascript-original.4c1b5332.svg"
  );
  // const [waterfall, setWaterfall] = useState<waterfallObj>({
  //   imgUrl: ["/static/media/html5-original.8664168d5bc90b1a24396f85aadbf623.svg"],
  //   colors: ["#e64f24", "#fcb494", "#77240d", "#892a0f", "#943004", "#892a0f"],
  // });
  const [hoverColors, setHoverColors] = useState<string[]>([
    "#e64f24",
    "#fcb494",
    "#77240d",
    "#892a0f",
    "#943004",
    "#892a0f",
  ]);
  const [shouldAnimate, setShouldAnimate] = useState(false);


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
    await setSkillSet(skillSet);
    await createWaterfall(skillSet)
  };

  const createWaterfall = async (skillSet: any) => {
    
    for (let i = 0; i < skillSet?.length; i++) {
      const hexCodes: string[] = [];
    try {
      await Vibrant.from(skillSet[i]?.image)
        .getPalette()
        .then((palette) => {
          for (let color in palette) {
            const hex: string | undefined = palette[color]?.getHex();
            if (hex) {
              hexCodes.push(hex)
            }
          }
        });
    } catch (error) {
      // Handle any errors that occur during the color extraction process
      console.error("Error while getting the color palette:", error);
    }

    const delayEachSkillcardColorUpdate = async () => {
     setSkillSet((prevSkillSet) => {
      const updatedSkillSet = [...prevSkillSet];
      updatedSkillSet[i].waterfall = hexCodes;
      return updatedSkillSet;
    });
  }
  delayEachSkillcardColorUpdate();
}
  }



  const getColorPalette = async (image: string) => {
    // console.log('hovered')
    // // setSelectedImage(image);
    // const hexCodes: string[] | any = [];

    // try {
    //   await Vibrant.from(image)
    //     .getPalette()
    //     .then((palette) => {
    //       for (let color in palette) {
    //         const hex: string | undefined = palette[color]?.getHex();
    //         if (hex) {
    //           hexCodes.push(hex);
    //         }
    //       }
    //     });
    // } catch (error) {
    //   // Handle any errors that occur during the color extraction process
    //   console.error("Error while getting the color palette:", error);
    // }
  
    //   setHoverColors(hexCodes);
  };


  // debug skillColorEffect
  // useEffect(() => {
  //   console.log(skillLogoColors);
  // }, [skillLogoColors]);

  useEffect(() => {
    // When waterfall data is updated, set shouldAnimate to true
    if (skillSet[0]?.waterfall?.length > 0) {
      setShouldAnimate(true);
    }
  }, [skillSet[0]?.waterfall?.length > 0]);

  useEffect(() => {
    createWaterfall(skillSet);
  }, [skillSet[0]?.waterfall?.length === 0]);
  

  return {
    updateSkillSet,
    skillSet,
    navigate,
    // getColors,
    // handleImageHover,
    // selectedImage,
    // skillLogoColors,
    hoverColors,
    getColorPalette,
    // waterfall,
    shouldAnimate,

  };

};

export default useSkills;
