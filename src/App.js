import { useState, useEffect } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";
import AddTodo from "./components/AddToDo";

function App() {
  const [tasks, setTasks] = useState([
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
    {
      id: 4,
      text: "Feed the dog (woof)",
      done: false,
    }
  ]);

  useEffect(() => {
    alert("Welcome!")
  }, [])

  const addTask = (text) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, text, done: false };

    setTasks([...tasks, newTask]);
  };

  const markAsDone = (taskID) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskID ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTodo onAdd={ addTask } />

        <ToDoList tasks={ tasks } onMark={ markAsDone } />
      </div>
    </div>
  );
}

export default App;
