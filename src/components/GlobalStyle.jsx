import { createGlobalStyle } from "styled-components";
import { color} from './UI/Colors';
import { ff, fs} from './UI/Tipography';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
		font-size: ${fs.paragraph['md']};
		font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  ul {
    list-style: none;
  }

	h1 {
		font-size: ${fs.heading['lg']};
		font-weight: 700;
	}

	h2 {
		font-size: ${fs.heading['md']};
		font-weight: 500; 
	}

	h3 {
		font-size: ${fs.heading['sm']};
		font-weight: 500; 
	}

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${color.zinc['900']};
  }

`