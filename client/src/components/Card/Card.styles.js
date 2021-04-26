const { default: styled } = require("styled-components");


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    width: 200px;
    height: 300px;


`

export const CardImage = styled.div`

    img {
        object-fit: cover;
    }
`

export const CardInfo = styled.div`

`