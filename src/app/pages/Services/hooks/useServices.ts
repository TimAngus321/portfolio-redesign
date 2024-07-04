import { useState } from "react";
import { useAnimate, usePresence } from "framer-motion";
import { services } from "../types/servicesType";
import strings from "app/constants/strings";
import consultation from "../data/consultation";
import useSkills from "../../Skills/hooks/useSkills";

const useServices = () => {
  const { sleep, clearState} = useSkills();
  const [service, setService] = useState<services[]>(consultation);
  const [highlightedService, setHighlightedService] = useState<string>(strings?.consult);
  const [scope, animate] = useAnimate();
  const [isPresent] = usePresence();

  const updateService = async (
    service: services[],
    highlightedService: string
  ) => {
    try {
      await setHighlightedService(highlightedService);
      if (window.innerWidth > 900) {
        await animate(scope.current, { x: "100vw" }, { duration: 0.3 });
      } else {
        await animate(scope.current, { opacity: 0 }, { duration: 0.3 });
      }
      await clearState();
      await setService(service);
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

  return {
    updateService,
    service,
    highlightedService,
    scope
  };
};

export default useServices;
