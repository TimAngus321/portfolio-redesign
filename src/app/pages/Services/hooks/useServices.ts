import { useState } from "react";
import { stagger, useAnimate, usePresence, useAnimation } from "framer-motion";
import { services } from "../types/servicesType";
import strings from "app/constants/strings";

const useServices = () => {
  const [service, setService] = useState<services[]>([]);
  const [highlightedService, setHighlightedService] = useState<string>(strings?.frontDev);
  const [scope, animate] = useAnimate();
  const [isPresent] = usePresence();

  const clearState = () => {
    const currentState: services[] = [];
    setService(currentState);
  };

  const sleep = async (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

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


// Just set intial state for service
//   const initialSkillSet = async (service: services[]) => {
//     try {
//       // setProcessing(true);
//       await setHighlightedService(strings?.frontDev);
//       await setService(service);
//     } catch (err) {
//       console.log("Animation error: ", err);
//     }
//   };

  return {
    updateService,
    service,
    highlightedService
  };
};

export default useServices;
