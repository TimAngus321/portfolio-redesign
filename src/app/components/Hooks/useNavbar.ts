import { useRef, useState } from "react";

const useNavbar = () => {
  const playerRef: any = useRef(null);

  const onHover = () => {
    playerRef.current?.playFromBeginning();
  };

  return {
    onHover,
    playerRef,
  };
};

export default useNavbar;
