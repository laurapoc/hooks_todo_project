import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList(props) {
  if (props.todos.length) {
    return (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            <Fragment>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {i < props.todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}
