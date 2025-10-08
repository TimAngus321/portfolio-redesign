import { useEffect, useState, useCallback } from "react";
import frontend from "../data/front-end-skills";
import { useNavigate } from "react-router-dom";
import { skills } from "../types/skillsetType";
import Vibrant from "node-vibrant";
import { stagger, useAnimate, usePresence } from "framer-motion";
import strings from "app/constants/strings";

const useSkills = () => {
  const [skillSet, setSkillSet] = useState<skills[]>([]);
  const [highlightSkillset, setHighlightSkillset] = useState<string>("");
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const [isPresent] = usePresence();

  const clearState = () => {
    const currentState: skills[] = [];
    setSkillSet(currentState);
  };

  const sleep = useCallback((delay: number) => new Promise((resolve) => setTimeout(resolve, delay)),
  []);

  const createWaterfall = useCallback(async (skillSet: skills[]) => {
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
          // Handle any errors that occur during color extraction
          console.error("Error while getting the color palette: ", err);
        }

      try {
        const addEachSkillcardHEXColors = async () => {
            setSkillSet((prevSkillSet) => {
              const updatedSkillSet = [...prevSkillSet];
              updatedSkillSet[i].waterfall = hexCodes;
              return updatedSkillSet;
            });
        };
        await addEachSkillcardHEXColors();
      } catch (err) {
        console.log("error when adding colors to skillSet object ", err);
      }
    }
  }, []);

  const updateSkillSet = useCallback(async (skillSet: skills[], highlightSkillset: string) => {
    try {
      await setHighlightSkillset(highlightSkillset);
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
        await sleep(300);
        await animate(
          "li.skillCard",
          { ["--block" as string]: "0%" },
          { delay: stagger(0.3) }
        );
      }
      return scope;
    } catch (err) {
      console.log("Animation error: ", err);
    }
  }, [animate, clearState, createWaterfall, isPresent, scope, sleep]);

  const initialSkillSet = useCallback(async (skillSet: skills[]) => {
    try {
      await setHighlightSkillset(strings?.front);
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
      return scope;
    } catch (err) {
      console.log("Animation error: ", err);
    }
  }, [animate, createWaterfall, isPresent, scope, sleep]);

  // For initial color waterfall effect load
  useEffect(() => {
    const initialSkillLoad = async () => {
      if (scope.current) {
        await initialSkillSet(frontend);
      }
    };
    initialSkillLoad();
  }, [initialSkillSet, scope]);

  const triggerHover = async () => {};

  return {
    updateSkillSet,
    skillSet,
    navigate,
    triggerHover,
    scope,
    animate,
    highlightSkillset,
    clearState,
    sleep
  };
};

export default useSkills;
