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
    // "#e64f24",
    // "#fcb494",
    // "#77240d",
    // "#892a0f",
    // "#943004",
    // "#892a0f",
  ]);

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
      console.error("Error while getting the color palette: ", error);
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

  // Try using framer animation then give up



  const getColorPalette = async (image: string) => {
    // console.log('hovered')
    // setSelectedImage(image);
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

//   const [scope, animate] = useAnimate();
//   const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
//   const staggerAnimation = (skillSetChange: skills[]) => {
  
//   useEffect(() => {
//     animate(
//       "skill-card-enter-done",
//       skillSet ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//       : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//       duration: 0.2,
//         delay: skillSet ? staggerMenuItems : 0
//       }
      

//     )
//     if (skillSet.length > 0) {
//       staggerAnimation(skillSet);
//     }
//   }, [skillSet]);
// }

// const [isOpen, setIsOpen] = useState(false);
// const scope = useMenuAnimation(isOpen);




  // debug skillColorEffect
  // useEffect(() => {
  //   console.log(skillLogoColors);
  // }, [skillLogoColors]);

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
  };

};

export default useSkills;
