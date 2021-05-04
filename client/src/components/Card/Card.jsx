import React from 'react'
import { CardContainer, CardImage, CardInfo } from './Card.styles'

const genericUrl = "https://www.julianmarquina.es/wp-content/uploads/Para-efecto-legales-un-libro-es-todo-impreso-no-periodico-que-contiene-49-paginas-o-mas.jpg"


export const Card = ({ name, year, author, editorial, images }) => {



    return (
        <CardContainer>

            <CardImage>
                <img src={images[0] ? images[0].url : genericUrl} alt="book" />
            </CardImage>

            <CardInfo>
                <h2>{name}</h2>
                <h3>{year}</h3>
                <h3>{author}</h3>
                <h3>{editorial}</h3>
            </CardInfo>
            
        </CardContainer>
    )
}
