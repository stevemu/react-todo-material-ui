import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter, {
  ALL_OPTION,
  INPROGRESS_OPTION,
  COMPLETED_OPTION
} from "./components/TodoFilter";
const uuid = require("uuid/v4");

function App() {
  let [todos, setTodos] = useState([]);
  let [filterSelected, setFilterSelected] = useState(ALL_OPTION);

  useEffect(() => {
    let todos = [
      {
        id: "1",
        completed: false,
        text: "hello"
      },
      {
        id: "2",
        completed: true,
        text: "world"
      }
    ];
    setTodos(todos);
  }, []);

  function handleTodoCheck(id) {
    let updatedTodos = todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        completed: !todo.completed
      };
    });
    setTodos(updatedTodos);
  }

  function onAddTodo(text) {
    let todo = {
      id: uuid(),
      text,
      completed: false
    };

    setTodos([...todos, todo]);
  }

  function onChangeSelection(selection) {
    setFilterSelected(selection);
  }

  function getTodosWithFilter(todos, filter) {
    if (filter === ALL_OPTION) {
      return todos;
    } else if (filter === INPROGRESS_OPTION) {
      return todos.filter((todo) => {
        return todo.completed === false;
      })
    } else if (filter === COMPLETED_OPTION) {
      return todos.filter((todo) => {
        return todo.completed === true;
      })
    }
  }

  return (
    <div>
      <TodoInput onAdd={onAddTodo} />
      <TodoFilter
        selected={filterSelected}
        onChangeSelection={onChangeSelection}
      />
      <TodoList todos={getTodosWithFilter(todos, filterSelected)} onTodoCheck={handleTodoCheck} />
      <a href="https://github.com/stevemu/react-todo">Source code</a>
    </div>
  );
}

export default App;
