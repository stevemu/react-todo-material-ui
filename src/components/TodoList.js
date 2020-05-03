import React, { useState } from "react";
import Todo from "./Todo";

function TodoList(props) {
  let { todos, onTodoCheck } = props;

  return (
    <div className="list">
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} onCheck={onTodoCheck} />;
      })}
    </div>
  );
}

export default TodoList;
