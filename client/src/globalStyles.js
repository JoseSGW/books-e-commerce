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
    color: #F6F7EB;
    border: none;
    padding: .6rem 1rem;
    box-shadow: none;
  }

  img {
	height: auto;
	max-width: 100%;
}

  a{
    text-decoration: none;
  }

  input{
    border: none;
    padding: .6rem;
  }
`;

export default GlobalStyle;


