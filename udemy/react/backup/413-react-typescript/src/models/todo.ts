class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString() + Math.round(Math.random() * 10);
  }
}

export default Todo;