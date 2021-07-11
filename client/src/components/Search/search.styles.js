import styled from 'styled-components'


export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    max-width: 30rem;

    input{
        width: 70%;
        border: .1rem solid ${props => props.theme.styles.colorPrimario};
        background-color: ${props => props.theme.styles.colorSecundario};
    }
    button{
        width: 30%;
        border: .1rem solid ${props => props.theme.styles.colorPrimario};
        background-color: ${props => props.theme.styles.colorPrimario};
    }
    
`