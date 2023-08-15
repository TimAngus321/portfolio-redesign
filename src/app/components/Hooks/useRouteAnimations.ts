import { useLocation } from "react-router-dom";

const useRouteAnimations = () => {
  const location = useLocation();
  let pageTransitionAnimation: any;

  if (window.innerWidth > 900) {
    pageTransitionAnimation = {
      timeout: 500,
      initial: { opacity: 0, duration: 0 },
      enter: { opacity: 1, duration: 1.5 },
      exit: { opacity: 0, duration: 0.5 },
    };
  } else {
    pageTransitionAnimation = {
      timeout: 0,
      initial: { opacity: 1, duration: 0 },
      enter: { opacity: 1, duration: 0 },
      exit: { opacity: 1, duration: 0 },
    };
  }

  return {
    pageTransitionAnimation,
    location,
  };
};

export default useRouteAnimations;
