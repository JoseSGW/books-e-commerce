import styled from "styled-components";

export const FitlerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: min(100%, 25rem);
    padding: 1rem;
    width: min(100%, 20rem);
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${props => props.theme.styles.colorSecundario};

    .maxHeight{
        height: 100%;
        margin: 0;
        border: none;
    }

    .form-container{
        display: flex;
        flex-direction: column;
        height: 100%;

            .filter{
                display: flex;
                flex-direction: column;
                gap: .5rem;
                height: 100%;
                margin: 1rem 0;
            }

    }

    .price-container{
        margin-top: 3rem;

    }

    .btn-filtrar{
        margin-top: 3rem;
    }

    .botones-de-filtro{
        display: flex;
        margin-top: 2rem;
        gap: 0;

    }
`