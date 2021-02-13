import { createNotifications } from "./noty.js";
import { createPush } from "./push.js";

let button = document.querySelector(".submit");

button.addEventListener("click", () => {
  createNotifications("loading...", "left", "aquamarine", "");
  setTimeout(() => {
    createNotifications("End loading!", "right middle", "green");
  }, 5000);
});

let push = document.querySelector(".push");

push.addEventListener("click", () => {
  createPush("Yes, it's push!", "Ok!");
});
