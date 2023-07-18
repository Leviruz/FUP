/* import { useState } from 'react' */

import ThemeButton from "./components/ChangeThemeButton and GlobalTheme/ThemeButton";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/ToDoList/ToDoList";

console.log(Date.now);
function App() {
  return (
    <div className="container">
      <div>
        <Navbar />
        <TodoList />
   
      </div>
    </div>
  );
}

export default App;
