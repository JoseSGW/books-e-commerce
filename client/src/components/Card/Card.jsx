import React from 'react'
import { StyledCardMedia, StyledTypography, StyledCard, StyledCardContent, StyledCardActionArea } from './Card.styles'
import { Link } from 'react-router-dom';
import { PurchaseButtons } from '../PurchaseButtons/PurchaseButtons';


const genericUrl = "https://www.julianmarquina.es/wp-content/uploads/Para-efecto-legales-un-libro-es-todo-impreso-no-periodico-que-contiene-49-paginas-o-mas.jpg"


export const CardComponent = ({ id, name, year, author, editorial, images, price }) => {

    return (
        <StyledCard>
            <StyledCardActionArea component={Link} to={`/details/${id}`} className="img-cardActionMedia">
                <StyledCardMedia
                    className="card-container"
                    image={images[0] ? images[0].url : genericUrl} title="book">
                </StyledCardMedia>
            </StyledCardActionArea>


            <StyledCardContent className="info-container" component="div">
                <StyledCardActionArea className="titles-container" component={Link} to={`/details/${id}`}>
                    <StyledTypography component="h2" className="book-tittle">{name}</StyledTypography>
                    <StyledTypography component="h3" className="book-author">{author}</StyledTypography>

                    <StyledCardContent className="price-container">
                        <StyledTypography component="h3" >{price}</StyledTypography>
                    </StyledCardContent>
                </StyledCardActionArea>

                <PurchaseButtons product={{id, name, price, images, amount: 1}}/>
            </StyledCardContent>
        </StyledCard>
    )
}
