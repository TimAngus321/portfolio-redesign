import { useEffect, useState } from "react";
import languages from "../data/languages";
import { useNavigate } from "react-router-dom";
import { skills } from "../types/skillsetType";
import Vibrant from "node-vibrant";
import { stagger, useAnimate, usePresence, useAnimation } from "framer-motion";
import strings from "app/constants/strings";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>([]);
  const [highlightSkillset, setHighlightSkillset] = useState<string>('');

  // Firefox colours
  const [hoverColors, setHoverColors] = useState<string[]>([
    "#e64f24",
    "#fcb494",
    "#77240d",
    "#892a0f",
    "#943004",
    "#892a0f",
  ]);

  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const [isPresent] = usePresence();

  // const [processing, setProcessing] = useState<boolean>(false);

  const clearState = () => {
    const currentState: skills[] = [];
    setSkillSet(currentState);
  };

  const sleep = async (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  const updateSkillSet = async (skillSet: skills[], selectedSkill: string) => {
    try {
      // uncomment if !processing duirng development to remove unecessary error
      // If someone switches between skillSets to quickly it will error gracefully but not
      // perform entire waterfall animation
      // if (!processing) {
      // setProcessing(true);
      // setHighlightSkillset(skillSet[0].name);
      await setHighlightSkillset(selectedSkill);

      if (window.innerWidth > 900) {
        await animate(scope.current, { x: "100vw" }, { duration: 0.3 });
      } else {
        await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
      }

      await clearState();
      await setSkillSet(skillSet);
      await createWaterfall(skillSet);
      await sleep(250);
      if (isPresent) {
        if (window.innerWidth > 900) {
          await animate(scope.current, { x: 0 }, { duration: 0.3 });
        } else {
          await animate(scope.current, { opacity: 1 }, { duration: 0.3 });
        }
        await animate(
          "li.skillCard",
          { ["--block" as string]: "100%" },
          { delay: stagger(0.3) }
        );
        await sleep(250);
        await animate(
          "li.skillCard",
          { ["--block" as string]: "0%" },
          { delay: stagger(0.3) }
        );
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
      await setHighlightSkillset(strings?.lang);
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
      if (
        scope.current
        //  && !processing
      ) {
        await initialSkillSet(languages);
      }
    };
    initialSkillLoad();
  }, [skillSet[0]?.waterfall?.length === 0]);

  const createWaterfall = async (skillSet: any) => {
    for (let i = 0; i < skillSet?.length; i++) {
      const hexCodes: string[] = [];
      if (!navigator?.userAgent?.includes("Firefox")) {
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
          // Handle any errors that occur during color extraction
          console.error("Error while getting the color palette: ", err);
        }
      }

      try {
        const addEachSkillcardHEXColors = async () => {
          if (navigator?.userAgent?.includes("Firefox")) {
            setSkillSet((prevSkillSet) => {
              const updatedSkillSet = [...prevSkillSet];
              updatedSkillSet[i].waterfall = hoverColors;
              return updatedSkillSet;
            });
          } else {
            setSkillSet((prevSkillSet) => {
              const updatedSkillSet = [...prevSkillSet];
              updatedSkillSet[i].waterfall = hexCodes;
              return updatedSkillSet;
            });
          }
        };
        await addEachSkillcardHEXColors();
      } catch (err) {
        console.log("error when adding colors to skillSet object ", err);
      }
    }
  };

  const triggerHover = async () => {};

  return {
    // processing,
    updateSkillSet,
    skillSet,
    navigate,
    triggerHover,
    scope,
    animate,
    highlightSkillset
  };
};

export default useSkills;
