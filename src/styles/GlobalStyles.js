import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  &, &.dark-theme {
      --background-app-1: linear-gradient(135deg, hsla(215, 46%, 8%, 1) 59%, hsla(216, 30%, 18%, 1) 100%);
;

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
      --background-app-1: linear-gradient(135deg, hsla(204, 41%, 37%, 1) 16%, hsla(225, 89%, 47%, 1) 100%);

      --background-color-1: #749BC2;
      --background-color-2: #91C8E4;
      --background-color-3: #F6F4EB;

      --font-color-1: #f1f1f1;

      --misc-color-1: #598fb2;
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

  @media only screen and (width <= 1600px){
    font-size: 54.5%;
  }

  @media only screen and (width <= 1400px){
    font-size: 50%;
  }

  @media only screen and (width <= 1280px) {
    font-size: 46%;
  }

  @media only screen and (width <= 1040px) {
    font-size: 42%;
  }

  @media only screen and (width <= 565px) {
    font-size: 38%;
  }

  @media only screen and (width <= 400px) {
    font-size: 34%;
  }
}

body {
  font-size: 1.6rem;
  font-family: 'Ubuntu', sans-serif;
}

ul {
  list-style: none;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3.6rem;
}

h3 {
  font-size: 2.6rem;
}

h4 {
  font-size: 2.4rem;
}

h5 {
  font-size: 2.4rem;
}

h6 {
  font-size: 1.6rem;
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

// Style for leaflet library
.custom .leaflet-popup-content-wrapper {
  padding: 1px;

  & .leaflet-popup-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8rem
  }
}

`;
