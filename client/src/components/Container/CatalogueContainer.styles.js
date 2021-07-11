import styled from "styled-components";

export const CatalogueCont = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    padding: 3rem 0rem;
    gap: 2rem;
    margin: 0 3rem;
    justify-content: space-between;
    background-color: ${props => props.theme.styles.colorPrimarioClaro};


    @media (max-width: 1280px) {
        padding: 2rem 2rem;
    }

    @media (max-width: 800px) {
        gap: 1rem;
    }

    @media (min-width: 1920px) {
        padding: 3rem 7rem;
    }
`