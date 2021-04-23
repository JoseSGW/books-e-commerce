import styled from 'styled-components'


export const SliderOffer = styled.div`
    position: relative;
    height: 250px;
    margin: auto;
    width: 90%;
    place-items: center;
    overflow: hidden;
    display: grid;
    
    &::before {
    left: 0;
    top: 0;
    }

    &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg)
    }

    .slide-track{
        display: flex;
        width: calc(250px * 16);
        animation: scroll 40s linear infinite;
    }

    .slide-track:hover{
        animation-play-state: paused;
    }

    @keyframes scroll{
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-250px * 9));
        }
    }
    
    .slide{
        height: 200px;
        width: 250px;
        display: flex;
        align-items:center;
        padding: 15px;
        perspective: 100px;
    }

    .imgOffer{
        width: 100%;
        transition: transform 1s;
    }

    .imgOffer:hover{
        transform: translateZ(20px);
    }
`

