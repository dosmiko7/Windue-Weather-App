import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  &, &.dark-mode {
      --background-app-1: #0b131e;

      --background-container-1: #202b3b;

      --font-color-1: #fff;
      --font-color-2: #d1d1d1;

      --font-weight-300: 300;
      --font-weight-400: 400;
      --font-weight-500: 500;
      --font-weight-700: 700;
  }
  
  &.light-mode {
    

  }
  
}

*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html {
	font-size: 62.5%;
  background-color: rgba(100,100,100);
}

body {
  font-size: 1.6rem;
  font-family: 'Ubuntu', sans-serif;
}

input {
  font: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
}

input:hover {
  outline: none;
  border: none;
}

input:focus {
  outline: none;
  border: none;
}


`;
