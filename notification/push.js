export function createPush(title, body, dir, icon) {
  switch (Notification.permission) {
    case "denied":
      console.log("notification denied");
      break;
    case "granted":
      let notification = new Notification(title, {
        body,
        dir,
        icon,
      });
      break;
    default:
      Notification.requestPermission(function (permission) {
        createPush(title, body, dir, icon);
      });
      break;
  }
}
