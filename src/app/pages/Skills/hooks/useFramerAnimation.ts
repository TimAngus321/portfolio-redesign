import {motion, useAnimate, usePresence} from "framer-motion";


const useFramerAnimation = () => {

    const [isPresent, safeToRemove ] = usePresence();
    const [scope, animate ] = useAnimate();

  
    const parentAnimation = {
    initial: {
      opacity: 1,
      x: "220%",
      alignItems: "center",
      justifyContent: "center",
      ease: "easeInOut",
    },
    animate: {
      transition: {
        duration: 1,
        ease: "easeInOut",
        alignItems: "center",
        justifyContent: "center",
        type: "spring",
        bounce: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
      opacity: 1,
      x: "0%",
    },
    exit: {
      opacity: 0,
      x: "220%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    //   transition: {
    //     duration: 0.7,
    //     ease: "easeInOut",
    //   }
  };

  const childAnimations = {
    exit: { opacity: 1, x: "220%" },
    // transition: { exit: { duration: 2} }
  };

  return {
    parentAnimation,
    childAnimations,
    isPresent, 
    safeToRemove,
    scope, 
    animate 
  };
};

export default useFramerAnimation;
