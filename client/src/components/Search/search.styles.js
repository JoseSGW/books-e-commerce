import styled from 'styled-components'


export const SearchBar = styled.div`

    form{
        display: flex;
        max-width: 100%;


        input{
            width: 400px;
            border: none;
            background-color: ${props => props.theme.styles.colorSecundario};
        }
        button{
            border: none;
            background-color: ${props => props.theme.styles.colorPrimario};
        }
    }
`