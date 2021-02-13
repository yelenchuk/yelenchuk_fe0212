import { createNotifications } from "./noty.js";
import { createPush } from "./push.js";

let button = document.querySelector("#first");

button.addEventListener("click", () => {
  createNotifications("loading...", "left", "aquamarine", "");
  setTimeout(() => {
    createNotifications("End loading!", "right middle", "green");
  }, 4750);
});

let push = document.querySelector("#second");

push.addEventListener("click", () => {
  createPush("Yes, it's push!", "Ok!");
});
