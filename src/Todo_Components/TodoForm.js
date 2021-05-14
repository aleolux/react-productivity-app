function TodoForm(props) {
  return (
    <form className="TodoForm">
      <input
        type="text"
        placeholder="Enter a new task."
        name="input"
        value={props.value}
        onChange={props.onInputChange}
      />
      <button onClick={props.addTask}>Add</button>
      <button onClick={props.removeItems}>Remove completed</button>
    </form>
  );
}

export default TodoForm;
