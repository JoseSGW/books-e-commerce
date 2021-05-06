import styled from "styled-components";

export const FitlerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-height: 100%;
    width: 20vw;
    background-color: blanchedalmond;

    .form-container{
        display: flex;
        flex-direction: column;
        

        fieldset{
            .filter{
                display: flex;
                flex-direction: column;
                margin: 2.5rem auto;
                gap: .5rem;
            }
        }
    }

    .price-container{
        margin-top: 3rem;
    }

    .btn-filtrar{
        margin-top: 3rem;
    }
`