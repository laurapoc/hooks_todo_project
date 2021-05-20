import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";
import { TodosContext } from "./contexts/todos.context";

export default function EditTodoForm(props) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(props.task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(props.id, value);
        reset();
        props.toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
