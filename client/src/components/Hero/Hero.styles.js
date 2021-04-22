import styled from 'styled-components'
import { Search } from '../Search/Search.jsx'
import { SearchBar } from '../Search/search.styles'


export const CustomSearch = styled(Search)`
    div {
        /* z-index: 10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
        width: 1000px;
        height: 100px;
    }
`


export const HeroContainer = styled.div`
    background-color: yellow;

`