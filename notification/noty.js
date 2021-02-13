export function createNotifications(text, position, style, className) {
  returnStyle(text, style);
  $.notify(text, {
    position,
    style: style ? style : "default",
  });
}

function returnStyle(text, style) {
  if (style) {
    return $.notify.addStyle(style, {
      html: "<div>☺<span data-notify-text/>☺</div>",
      classes: {
        base: {
          "white-space": "nowrap",
          "background-color": style,
          padding: "10px",
          "border-radius": "7px",
        },
      },
    });
  } else {
    return $.notify.addStyle("default", {
      html: `<div>☺<span data-notify-text/>${text}</div>`,
      classes: {
        base: {
          "white-space": "nowrap",
          "background-color": "lightyellow",
          padding: "10px",
          "border-radius": "7px",
        },
      },
    });
  }
}
