import { useState } from "react";

const ThemeButton = () => {

    const[darkMode,setDarkMode]= useState(false); // setando a variavel de tema escuro(dark) e tema claro(!dark)
    
    const toggleColorScheme =() =>{
        //mecanismo pra atualizar o estado usando o hook do useState(não ter perigo de pegar o estado desatualizado) pegando o estado anterior 
        setDarkMode(prevState => !prevState) 
    }
    
    
  return(
    <div className="buttonWrapper">
        
        <button onClick={toggleColorScheme}>
            {/* verificação do modo através de if ternário */}
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <p>Current mode: {darkMode ? 'Dark' : 'Light'}</p>
    </div>
    );
};

export default ThemeButton;
