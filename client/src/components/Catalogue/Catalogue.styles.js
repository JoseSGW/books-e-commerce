import styled from 'styled-components'


export const CatalogueContainer = styled.div`
    margin: 0 auto; 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem 2rem;
    max-width: 90%;

    @media only screen and (max-width: 1280px) {
        
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        width: 90%;
    }
`
