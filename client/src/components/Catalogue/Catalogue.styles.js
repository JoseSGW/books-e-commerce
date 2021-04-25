import styled from 'styled-components'


export const CatalogueContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr); //borrar esto en caso de neceitar infinite scroll
`