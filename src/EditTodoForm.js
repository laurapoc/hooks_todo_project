import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";
import { TodosContext } from "./contexts/todos.context";

export default function EditTodoForm(props) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(props.task);
  console.log("EDIT TODO FORM RENDER");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: props.id, newTask: value });
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
