export function createElement(tagName, props = {}, children) {
  const el = document.createElement(tagName);

  for (const propertyName in props) {
    const propertyValue = props[propertyName];

    el[propertyName] = propertyValue;
  }

  if (Array.isArray(children)) {
    el.append(...children);
  }

  return el;
}

export function classNames(...classNamesList) {
  return classNamesList.filter(Boolean).join(" ");
}

export function createNotification(title, body, dir, icon) {
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
        createNotification(title, body, dir, icon);
      });
      break;
  }
}
