const Todos = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const todos = await response.json();
      console.log(todos);
  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map((post) => (
          <div className="todo-item" key={post.id}>
            <input type="checkbox" checked={post.completed} readOnly />
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default Todos;