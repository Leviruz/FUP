import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

//componente global de estilo pra mudar o tema do app
const GlobalStyles = createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    body {
    line-height: 1.5;
    font-weight: 400;
    display: flex;
    color: ${(props) =>
      props.darkMode ? "#213547" : "rgba(255, 255, 255, 0.87)"};
    background-color: ${(props) => (props.darkMode ? "#ffffff" : "#2f2f32")};
  }


.ToggleStyle{
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: ${(props) => (props.darkMode ? "#515151" : "#8f8f8f")};
    cursor: pointer;
    transition: border-color 0.25s;
}
.ToggleStyle:hover {
    background-color: ${(props) => (props.darkMode ? "#747bff" : "#535bf2")};
    transition: 09ms linear;
  }
  .container{
    border: ${(props) => (props.darkMode ? "1px solid #222" : "1px solid #fff")};
    width: 700px;
    padding-bottom: 20px;
    border-radius: 10px;
    display: flex;
    margin: 50px 100px;
    justify-content: center;
    min-height: 800px;
  }
  
  

`;

const ThemeButton = () => {
  // setando a variavel de tema escuro(dark) e tema claro(!dark)
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorScheme = () => {
    //mecanismo pra atualizar o estado usando o hook do useState(não ter perigo de pegar o estado desatualizado) pegando o estado anterior
    setDarkMode((prevState) => !prevState);
  };


  return (
    <>
      <GlobalStyles darkMode={darkMode} />
      <button className="ToggleStyle" onClick={toggleColorScheme}>
        {/* icone mudando com if ternario baseado no estilo de cor da pagina */}
        {darkMode ? (
          <BsFillMoonFill style={{ color: "#fff" }} />
        ) : (
          <BsSunFill style={{ color: "#fdf747" }} />
        )}
      </button>
      
    </>
  );
};

export default ThemeButton;
