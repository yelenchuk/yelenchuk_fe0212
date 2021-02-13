export default class list {
  constructor(props) {
    // создаем список
    this._props = props;

    this.clear();
  }

  changeProps(newProps) {
    this._props = {
      ...this._props,
      ...newProps,
    };
  }

  addItem(newItem) {
    this._props.items.push(newItem);
    this._props.listEl.append(newItem);
  }

  removeIteam(removedIteam) {
    this._props.items = this.props.items.filter(
      (item) => item !== removedIteam
    ); // в item отсавим только те эл-ты, которые будем отображать
    this.removeIteam.remove();
  }

  getCount() {
    return this._props.items.length;
  }

  clear() {
    this._props.listEl.innerText = " ";
  }

  render() {
    this.clear();
    this._props.listEl.append(...this._props.items);

    return this._props.listEl;
  }
}

// {default: List}
