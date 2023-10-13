import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  &, &.dark-theme {
      --background-app-1: #0b131e;

      --background-color-1: #202b3b;
      --background-color-2: #35455e;
      --background-color-3: #5d6a7e;
      --background-color-4: #0095ff;
      --background-color-5: #004b80;

      --font-color-1: #d1d1d1;
      --font-color-2: #fff;

      --font-weight-300: 300;
      --font-weight-400: 400;
      --font-weight-500: 500;
      --font-weight-700: 700;

      --misc-color-1: #283549;
      --backdrop-color-1: rgba(0, 0, 0, 0.04);
  }
  
  &.light-theme {
      --background-app-1: #775B46;

      --background-color-1: #AD8B73;
      --background-color-2: #CEAB93;
      --background-color-3: #E3CAA5;
      --background-color-4: #D5AE00;
      --background-color-5: #8C7200;

      --font-color-1: #FFFBE9;
      --font-color-2: #FFF7D5;

      --misc-color-1: #A9866D;
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

a {
  color: inherit;
  text-decoration: none;
}


`;
