import "./styles.css";
import TodoList from "./Todo_Components/TodoList";
import React, { Component } from "react";
import TodoForm from "./Todo_Components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ""
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTask = (e) => {
    e.preventDefault();
    let newTask = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ""
    });
  };

  toggleComplete = (itemId) => {
    const todos = this.state.todos.map((e) => {
      if (e.id === itemId) {
        e.completed = !e.completed;
      }
      return e;
    });
    this.setState({ todos: todos });
  };

  removeItems = (e) => {
    e.preventDefault();
    const todos = this.state.todos.filter((i) => i.completed === false);
    this.setState({ todos: todos });
  };

  addLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch {
          this.setState({ [key]: value });
        }
      }
    }
  };

  saveLocalStorage = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  };

  componentDidMount() {
    this.addLocalStorage();
    window.addEventListener("beforeUnload", this.saveLocalStorage.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeUnload",
      this.saveLocalStorage.bind(this)
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Code SandBox</h1>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          onInputChange={this.onInputChange}
          todos={this.state.todos}
          todo={this.state.todo}
          addTask={this.addTask}
          removeItems={this.removeItems}
        />
      </div>
    );
  }
}

export default App;
