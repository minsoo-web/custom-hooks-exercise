import { useRef } from "react";

const useFullScreen = () => {
  const elementRef = useRef<HTMLImageElement>(null);
  const triggerFullScreen = () => {
    if (elementRef.current) {
      elementRef.current.requestFullscreen();
    }
  };

  return { elementRef, triggerFullScreen };
};

export default useFullScreen;
