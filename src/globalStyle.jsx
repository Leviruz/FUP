import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    color: ${(props) =>
      props.darkMode ? "#213547" : "rgba(255, 255, 255, 0.87)"};
    background-color: ${(props) => (props.darkMode ? "#ffffff" : "#242424")};
  }

  a {
    font-weight: 500;
    color: ${(props) => (props.darkMode ? "#747bff" : "#646cff")};
    text-decoration: inherit;
  }
  a:hover {
    color: ${(props) => (props.darkMode ? "#747bff" : "#535bf2")};
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: ${(props) => (props.darkMode ? "#f9f9f9" : "#1a1a1a")};
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: ${(props) => (props.darkMode ? "#646cff" : "#535bf2")};
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

`;

export default GlobalStyle