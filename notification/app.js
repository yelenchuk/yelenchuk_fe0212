import { createNotifications } from "./noty.js";

let button = document.querySelector(".submit");

button.addEventListener("click", () => {
  createNotifications("loading...", "left", "aquamarine", "");
  setTimeout(() => {
    createNotifications("End loading!", "right middle", "green");
  }, 5000);
});
