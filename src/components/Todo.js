import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

function Todo(props) {
  let { todo } = props;
  let { text, completed, id } = todo;

  function onCheckClick() {
    props.onCheck(id);
  }

  return (
    <div>
      <Checkbox checked={completed} onClick={onCheckClick} />
      {text}
    </div>
  );
}
export default Todo;
