import styled from 'styled-components'
import universe from "../../img/universe.jpg"


export const GeneralContainerTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center:
    align-items: center;
    margin: 60px auto;
    width: 100%;
    height: 600px;
    background-image:linear-gradient( rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.8)100%),url(${universe});; 
    background-size:cover;
    background-position: center;

    h2{
        color: white;
        font-size: 4rem;
        text-align: center;
    }
    //background-image:              
`