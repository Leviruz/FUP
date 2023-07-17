import { useState } from 'react'
import ThemeButton from './components/MudarTema/ThemeButton'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleColorScheme = () => {
    setDarkMode((prevState) => !prevState);
  };

    return (
      <AppWrapper>
        <GlobalStyles darkMode={darkMode} />
        <header>
          <h1>Hello React App!</h1>
          <ThemeToggleButton />
        </header>
      </AppWrapper>
    );

}

export default App
