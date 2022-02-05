import { useEffect, useRef } from "react";

const useFadeIn = (duration: number = 1, delay: number = 0.5) => {
  const element = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = "1";
    }

    // return () =>
  }, [delay, duration]);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
