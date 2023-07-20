import { useState } from "react";
import { FilterCSS } from "./FilterCSS";

const Filter = () => {
  //criação do array estatico:
  const array = [
    "prova de basica",
    "trabalho de fup",
    "trabalho de icc",
    "af de icc",
    "lista de fup",
    "festa de formatura",
    "partida de tenis",
    "prova de fup",
  ];

  // inicia o estado de busca como uma string vazia
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    //alimenta o estado pegando o valor alvo de evento(no caso, letra digitada)
    setSearch(event.target.value);
  };

  //criação da variavel de filtro que pega os valores que foram setados para o search 

  const filteredArray = array.filter((array) => array.includes(search));

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
          <ul>
            {/* usa a variável filtrada pra mostrar a lista apenas dos elementos que incluem as letras que foram digitadas */}
            {filteredArray.map((array) =>(
              <li key={array.id}> {array} </li>
            ))}
          </ul>
        </div>
      </div>
    </FilterCSS>
  );
};

export default Filter;
