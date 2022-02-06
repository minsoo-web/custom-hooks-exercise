const useNotification = (title: string, options: NotificationOptions) => {
  if (!window.Notification) {
    return;
  }

  const fireNotification = async () => {
    if (window.Notification.permission !== "granted") {
      const permission = await window.Notification.requestPermission();
      if (permission === "granted") {
        new Notification(title, options);
      } else return;
    } else {
      new Notification(title, options);
    }
  };

  return fireNotification;
};

export default useNotification;
