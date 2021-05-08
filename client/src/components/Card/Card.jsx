import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

import { CardContainer, CardImage, CardInfo, OwnCard, OwnCardContent } from './Card.styles'
const genericUrl = "https://www.julianmarquina.es/wp-content/uploads/Para-efecto-legales-un-libro-es-todo-impreso-no-periodico-que-contiene-49-paginas-o-mas.jpg"


export const CardComponent = ({ name, year, author, editorial, images }) => {

    return (
        <OwnCard>

            <CardImage className="card-container">
                <img src={images[0] ? images[0].url : genericUrl} alt="book" />
            </CardImage>

            <OwnCardContent>
                <CardInfo component="h2" className="book-tittle"  >{name}</CardInfo>
                <CardInfo component="h3" >{year}</CardInfo>
                <CardInfo component="h3" >{author}</CardInfo>
                <CardInfo component="h3" >{editorial}</CardInfo>
            </OwnCardContent>
            
        </OwnCard>
    )
}
