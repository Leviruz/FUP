/* import { useState } from 'react' */
import Filter from "./components/FilterTool/Filter";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/ToDoList/ToDoList";

console.log(Date.now);
function App() {
  return (
    <div className="container">
      <div>
        <Navbar />
        <TodoList />
        <h3>To do List Estática</h3>
        <Filter/>
      </div>
    </div>
  );
}

export default App;
