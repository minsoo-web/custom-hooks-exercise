import { useCallback, useEffect } from "react";

const useBeforeLeave = (onBefore: Function) => {
  const handler = useCallback(
    (event: MouseEvent) => {
      if (event.clientY >= 0) {
        // 브라우저 위로 마우스가 이동할 때만 동작하도록
        return;
      }
      onBefore();
    },
    [onBefore]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handler);

    return () => document.removeEventListener("mouseleave", handler);
  }, [handler]);
};

export default useBeforeLeave;
