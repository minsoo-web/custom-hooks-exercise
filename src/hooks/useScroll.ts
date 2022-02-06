import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onsScoll = () => {
    console.log("y: ", window.scrollY);
    console.log("x: ", window.scrollX);

    setState({
      x: window.scrollX,
      y: window.scrollY
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onsScoll);

    return () => window.removeEventListener("scroll", onsScoll);
  }, []);

  return state;
};

export default useScroll;
