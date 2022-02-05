const usePreventLeave = () => {
  const listener = (event: Event) => {
    event.preventDefault();
    // 크롬에서만 동작
    event.returnValue = false;
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
