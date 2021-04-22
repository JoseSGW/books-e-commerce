import styled from 'styled-components'
import { Search } from '../Search/Search.jsx'
import { SearchBar } from '../Search/search.styles'


export const CustomSearch = styled(Search)`
    ${SearchBar}{
        /* z-index: 10;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); */
    }
`


export const HeroContainer = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position: relative;
    max-width: 100%;
    height: 40vh;
    ${SearchBar}{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);         
    }

    h1{       
        position: absolute;
        font-size: 3rem;
        color: ${props => props.theme.styles.colorSecundario};
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);  
    }
`