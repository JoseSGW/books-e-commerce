import { createGlobalStyle, css } from 'styled-components';


export const styles = {
  colorPrimario: '#5C415D',
  colorSecundario: '#F6F7EB',

}


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #F6F7EB;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 62.5%
  }

  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
  }

  img {
	height: auto;
	max-width: 100%;
}

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;


