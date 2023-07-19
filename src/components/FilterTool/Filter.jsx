import { useState } from "react";
import { FilterCSS } from "./FilterCSS";
const Filter = () => {
  // inicia o estado como uma string vazia
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    //alimenta o estado pegando o valor alvo de evento(no caso, letra digitada)
    setSearch(event.target.value);
  };
  /* console.log(search); */
  return (
    <FilterCSS>
      <div>
        <div className="input_name">
          <label>Filtrar tarefas por nome</label>
          <input
            className="input_style"
            type="text"
            placeholder="Digite o nome da tarefa"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    </FilterCSS>
  );
};

export default Filter;
