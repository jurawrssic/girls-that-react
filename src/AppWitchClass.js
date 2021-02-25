import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";
import AddTodo from "./components/AddToDo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = [
      {
        id: 1,
        text: "Learn React",
        done: false,
      },
      {
        id: 2,
        text: "Brush the cat (meow)",
        done: true,
      },
      {
        id: 3,
        text: "Feed the dog (woof)",
        done: true,
      },
    ];
  }

  componentDidMount() {
    alert("Welcome")
  }

  componentWillUnmount() {
    alert("Byeee")
  }

  addTask = (text) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, text, done: false };

    this.setState([...this.state, newTask]);
  };

  markAsDone = (taskID) => {
    this.setState(
      this.state.map((task) =>
        task.id === taskID ? { ...task, done: !task.done } : task
      )
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddTodo onAdd={this.addTask} />

          <ToDoList tasks={this.state} onMark={this.markAsDone} />
        </div>
      </div>
    );
  }
}

export default App;
