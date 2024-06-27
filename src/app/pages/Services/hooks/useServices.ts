import { useState } from "react"
import { stagger, useAnimate, usePresence, useAnimation } from "framer-motion";

const useServices = () => {
const [skillSet, setSkillSet] = useState<skills[]>([]);
const [highlightSkillset, setHighlightSkillset] = useState<string>("");
const [scope, animate] = useAnimate();
const [isPresent] = usePresence();

const clearState = () => {
    const currentState: skills[] = [];
    setSkillSet(currentState);
  };

const updateSkillSet = async (skillSet: skills[], selectedSkill: string) => {
    try {
      await setHighlightSkillset(selectedSkill);
      if (window.innerWidth > 900) {
        await animate(scope.current, { x: "100vw" }, { duration: 0.3 });
      } else {
        await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
      }
      await clearState();
      await setSkillSet(skillSet);
      await sleep(250);
      if (isPresent) {
        if (window.innerWidth > 900) {
          await animate(scope.current, { x: 0 }, { duration: 0.3 });
        } else {
          await animate(scope.current, { opacity: 1 }, { duration: 0.3 });
        }
      }
      return scope;
    } catch (err) {
      console.log("Animation error: ", err);
    }
  };

  const initialSkillSet = async (skillSet: skills[]) => {
    try {
      // setProcessing(true);
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
  };

  // For initial color waterfall effect load
  useEffect(() => {
    const initialSkillLoad = async () => {
      if (scope.current) {
        await initialSkillSet(frontend);
      }
    };
    initialSkillLoad();
  }, [skillSet[0]?.waterfall?.length === 0]);

return {
    highlightSkillset
}

}

export default useServices;