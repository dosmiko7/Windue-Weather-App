import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  &, &.dark-mode {
      --background-app-1: #0b131e;

      --background-container-1: #202b3b;
      --background-container-2: #35455e;
      --background-container-3: #5d6a7e;

      --font-color-1: #d1d1d1;
      --font-color-2: #fff;

      --font-weight-300: 300;
      --font-weight-400: 400;
      --font-weight-500: 500;
      --font-weight-700: 700;

      --misc-color-1: #283549;
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

ul {
  list-style: none;
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

button {
  background-color: transparent;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
}


`;
