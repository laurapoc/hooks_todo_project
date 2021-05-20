import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  return (
    <Paper style={{ margin: "1rem 0", paddin: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          // fullWidth
          style={{ marginLeft: "3%", width: "95%" }}
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
