export class AddTaskForm {
  constructor(props = {}) {
    //this={}
    this._props = props;
    this._completeEl = this._props.formEl.querySelector(".complete-all"); //находим чек-бокс
    this._taskTextEl = this._props.formEl.querySelector(".new-todo"); //находим поле ввода

    this._props.formEl.addEventListener("submit", this.addTask.bind(this)); // перехватываем событие Submit - подписываемся на него

    //return this
  }

  addTask(e) {
    // e - событие
    e.preventDefault();
    const text = this._taskTextEl.value; // зн-ие imput текстовое
    const completed = this._completeEl.checked;
    const taskData = { text, completed };

    this._taskTextEl.value = "";
    if (this._props.onAddTask) {
      // this_props.onAddTask(taskData)
      this._props.onAddTask.call(this, taskData); //не та переменная что в app.js onAddTask(taskData)
    }

    console.log({ text, completed });
  }
}
