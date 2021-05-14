import Todo from "./Todo";

function TodoList(props) {
  // console.log(["TodoList props", props.todos]);
  return (
    <div>
      {props.todos.map((item, id) => (
        <Todo key={id} task={item} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
}

export default TodoList;
