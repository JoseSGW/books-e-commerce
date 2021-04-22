import styled from 'styled-components'

export const SliderContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 40vh;
    overflow: hidden;
    z-index: -10;
`


export const Slider = styled.div`
    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .inactive{
        opacity: 0;
        transition-duration: 5s ease;
    }

    .active{
        opacity: 1;
        transition-duration: 4s;
    }

    .slide-img{
    object-fit: cover;
    }

`
