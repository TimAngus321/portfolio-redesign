import { useEffect, useState, useContext } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills, waterfallObj } from "../types/skillsetType";
import Vibrant from "node-vibrant";
import useFramerAnimation from "./useFramerAnimation";
import {
  stagger,
  useAnimate,
  usePresence,
  useAnimation,
  PresenceContext,
} from "framer-motion";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>([]);
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
  // const { enterAnimation} = useFramerAnimation();
  const [scope, animate] = useAnimate();
  const controls = useAnimation();
  const [isPresent] = usePresence();
  const [processing, setProcessing] = useState<boolean>(false);

  const clearState = () => {
    const currentState: skills[] = [];
    setSkillSet(currentState);
  };

  const sleep = async (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  const updateSkillSet = async (skillSet: skills[]) => {
    try {
      // uncomment if !processing duirng development to remove unecessary error
      // if (!processing) {
        // setProcessing(true);

        
        await animate(scope.current, { x: "100vw" }, { duration: 0.3 });
        await clearState();
        await sleep(500);
        await setSkillSet(skillSet);
        await createWaterfall(skillSet);
        if (isPresent) {
          if (window.innerWidth > 900) {
        await animate(scope.current, { x: 0 }, { duration: 0.3 });
        await animate(
            "li.skillCard",
            { ["--block" as string]: "100%" },
            { delay: stagger(0.2) }
          );
          await sleep(250);
          await animate(
            "li.skillCard",
            { ["--block" as string]: "0%" },
            { delay: stagger(0.2) }
          );
          // add mobile animations here
        } else {
          console.log(`i'm mobile width`)
        }
      } 
      // }
      // setProcessing(false);
      return scope;
    } catch (err) {
      console.log("Animation error: ", err);
    }
  };

  const initialSkillSet = async (skillSet: skills[]) => {
    try {
      // setProcessing(true);
      await setSkillSet(skillSet);
      await createWaterfall(skillSet);
      if (isPresent) {
        await animate(
          "li.skillCard",
          { ["--block" as string]: "100%" },
          { delay: stagger(0.3) }
        );
        await sleep(150);
        await animate(
          "li.skillCard",
          { ["--block" as string]: "0%" },
          { delay: stagger(0.3) }
        );
      }
    // setProcessing(false);
    return scope;
  } catch (err) {
    console.log("Animation error: ", err);
  }
  };

  // For initial color waterfall effect load
  useEffect(() => {
    const initialSkillLoad = async () => {
      if (scope.current && !processing) {
        await initialSkillSet(languages);
      }
    };
    initialSkillLoad();
  }, [skillSet[0]?.waterfall?.length === 0]);

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
                hexCodes.push(hex);
              }
            }
          });
      } catch (err) {
        // Handle any errors that occur during the color extraction process
        console.error("Error while getting the color palette: ", err);
      }

      try {
        const delayEachSkillcardColorUpdate = async () => {
          setSkillSet((prevSkillSet) => {
            const updatedSkillSet = [...prevSkillSet];
            updatedSkillSet[i].waterfall = hexCodes;
            return updatedSkillSet;
          });
        };
        await delayEachSkillcardColorUpdate();
      } catch (err) {
        console.log("error while setting color palette ", err);
      }
    }
  };

  const getColorPalette = async (image: string) => {
    // Don't delete unless you know you want the waterfall option to be permenant
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

  // useEffect(() => {
  //   control
  // }, [skillSet]);

  // debug skillColorEffect
  // useEffect(() => {
  //   console.log(skillLogoColors);
  // }, [skillLogoColors]);

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
    // sleep,
    // controls,
    // waterfall,
    scope,
    animate,
    processing,
  };
};

export default useSkills;
