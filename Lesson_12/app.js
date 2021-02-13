// APP:
// 1. AddTaskForm
// 2. Task
// 3. List
// 4. Counter
// 5. Filter

import { AddTaskForm } from "./addTaskForm.js";
import { Task } from "./Task.js";
import List from "./List.js";
import { createNotification } from "./lib.js";

let ntf = document.querySelector("#ntf");

ntf.addEventListener("click", () => {
  createNotification("yelow?", "No!");
});

const addTaskForm = new AddTaskForm({
  formEl: document.querySelector(".header"),
  onAddTask, // передача данных из компонента addTaskForm в app.js
});

const list = new List({
  listEl: document.querySelector(".todo-list"),
  items: [], // передаем эл-ты которые будут рисоваться. в качестве объекта будет эл-т со св-вом render, которые будут отображать нашу верстку
});

function onAddTask(taskData) {
  // при вызове метод onAddTask, форма сообщает, что хотим создать новую задачу new Task
  const task = new Task(taskData);

  list.addItem(task.render()); // возвращает верстку новой задачи, передавая верстку в addItem мы получаем ее на экране
}
