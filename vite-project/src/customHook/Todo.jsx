import { useEffect, useState } from "react";
import useTodoFetch from "./useTodoFetch";

const Todo = () => {
  const [todo, setTodo] = useState(null);
  const [data] = useTodoFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => setTodo(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ marginLeft: "40px" }}>
      <h2>a. Fetching data</h2>
      <ul>{todo && todo.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
      <h2>b. Fetching data using custom hook (useTodoFetch)</h2>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
};

export default Todo;
