import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TodoInput(props) {
  let [text, setText] = useState("");

  function onChangeText(e) {
    setText(e.target.value);
  }

  function handleAddClick() {
    props.onAdd(text);
    setText("");
  }

  function onTextFieldKeyPress(e) {
    if (e.key === "Enter") {
      props.onAdd(text);
      setText("");
    }
  }

  return (
    <div>
      <TextField value={text} onChange={onChangeText} onKeyPress={onTextFieldKeyPress} />
      <Button variant="contained" onClick={handleAddClick}>Add</Button>
    </div>
  );
}

export default TodoInput;
