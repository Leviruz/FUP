import { useState } from "react";
import { FcCancel, FcOk } from "react-icons/fc"
import Filter from "../FilterTool/Filter";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    // o uso do trim serve pra retirar os espaços em branco antes e depois da string, gerando uma nova string sem esses espaços, impossibilitando a existencia de tarefas vazias

    // inicia verificando se o usuário digitou algo
    if (inputValue.trim() !== "") {
      const newTodo = {
        // timestamp como id único da tarefa pro objeto estruturado
        // conceito de timestamp: pouco associado ao conceito de c, usando srand e time.h
        
        // struct
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Filter />
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}> <FcCancel/> </button>
            <button onClick={() => handleToggleCompletion(todo.id)}>
              {todo.completed ? "Desfazer" : <FcOk/>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
