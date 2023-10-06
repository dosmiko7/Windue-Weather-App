import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  &, &.dark-mode {
      --background-app-1: #0b131e;

      --background-container-1: #202b3b;

      --font-color-1: #fff;
      --font-color-2: #d1d1d1;
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
    background-color: rgba(100,100,100)
}

`;
