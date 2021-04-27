import styled from 'styled-components'


export const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.styles.colorSecundario};
    color: ${props => props.theme.styles.colorPrimario};
    height: 70px;
    font-size: 1.3rem;
    border: 1px solid black;

    .menu-options{
        display: flex;
        gap: .5rem;
    }

    .menu-users{
        display: flex;
        gap: .5rem;
    }

    div {
        a {
            border-radius: 5px;
            padding: 1rem 1.5rem;
            :hover{
                background-color: ${props => props.theme.styles.colorPrimarioClaro};
                color: ${props => props.theme.styles.colorSecundario};
                transition: all .6s;
    }
        }
    }
`