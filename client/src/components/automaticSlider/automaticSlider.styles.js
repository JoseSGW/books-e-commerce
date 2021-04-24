import styled from 'styled-components'

export const SliderContainer = styled.div`
    position: absolute;
    width: 100%;
    z-index: -10;
    overflow: hidden;
    height:40vh;
`


export const Slider = styled.div`
    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 40vh;
    

    .inactive{
        opacity: 0;
        transition-duration: 5s ease;
    }

    .active{
        opacity: 1;
        transition-duration: 4s;
        width: 100%; //evita que la pagina salte cuando cambia la imagen
    }

    .slide-img{
    object-fit: cover;
    width:100%;
    }

`
