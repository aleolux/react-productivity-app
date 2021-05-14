import React from "react";

function Todo(props) {
  // console.log(["todo props", props]);
  return (
    <div
      className="Todo"
      key={props.task.id}
      onClick={(event) => {
        props.toggleComplete(props.task.id);
      }}
    >
      <p>{props.task.task}</p>
    </div>
  );
}

export default Todo;
