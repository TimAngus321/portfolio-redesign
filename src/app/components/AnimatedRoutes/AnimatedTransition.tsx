import useRouteAnimations from "../Hooks/useRouteAnimations";
import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { ReactNode } from "react";

const AnimatedTransition = ({ children }: { children: ReactNode }) => {
  const { pageTransitionAnimation, location } = useRouteAnimations();
  console.log(pageTransitionAnimation);

  return (
    <SwitchTransition>
      <Transition
        key={location.key}
        timeout={pageTransitionAnimation?.timeout}
        onEnter={(node: HTMLElement | null) => {
          gsap.set(node, pageTransitionAnimation?.initial);
          gsap
            .timeline({ paused: true })
            .to(node, pageTransitionAnimation?.enter)
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, pageTransitionAnimation?.exit)
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default AnimatedTransition;
