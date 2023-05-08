import React, { useState , useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [greeting, setGreeting] = useState("");
  const [day, setDay] = useState("");

  const addTodo = (todo) => {
    setTodos([
      {
        id: uuidv4(),
        task: todo,
      },
      ...todos,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    let dayString = now.toLocaleString('default', { weekday: 'long' });
    let dateString = now.toLocaleDateString();

    if (hour >= 6 && hour < 12) {
      setGreeting("Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Afternoon");
    } else {
      setGreeting("Evening");
    }

    setDay(`${dayString} ${dateString}`);
  }, []);

  return (
    <div className="container">
      <div className="form-container">
        <small>Good <span>{greeting}!</span></small>
        <h1>
          Todo
        </h1>
        <small>{day}</small>
        <TodoForm className="todo-form" addTodo={addTodo} />
      </div>

      <div className="todo-container">
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} onDelete={() => deleteTodo(todo.id)} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
