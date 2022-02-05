const useConfirm = (message: string, callback: Function, rejection: Function) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};

export default useConfirm;
