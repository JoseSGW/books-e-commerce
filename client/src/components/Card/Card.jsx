import React from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { StyledCardMedia, StyledTypography, StyledCard, StyledCardContent, StyledCardActionArea } from './Card.styles'
import { DetailsBook } from '../DetailsBook/DetailsBook';
import { Link } from 'react-router-dom';


const genericUrl = "https://www.julianmarquina.es/wp-content/uploads/Para-efecto-legales-un-libro-es-todo-impreso-no-periodico-que-contiene-49-paginas-o-mas.jpg"


export const CardComponent = ({ id, name, year, author, editorial, images, price }) => {

    return (
        <StyledCard>
            <StyledCardActionArea component={DetailsBook} to={`/details/${id}`} className="img-cardActionMedia">
                <StyledCardMedia
                    className="card-container"
                    image={images[0] ? images[0].url : genericUrl} title="book">
                </StyledCardMedia>
            </StyledCardActionArea>


            <StyledCardContent className="info-container" component="div">
                <StyledCardActionArea className="titles-container">
                    <StyledTypography component="h2" className="book-tittle"  >{name}</StyledTypography>
                    <StyledTypography component="h3" >{author}</StyledTypography>

                    <StyledCardContent className="price-container">
                        <StyledTypography component="h3" >{price}</StyledTypography>
                    </StyledCardContent>
                </StyledCardActionArea>

                <StyledCardContent className="option-container">
                    <Button className="btn btn-wish" variant="outlined"><ShoppingCartIcon/></Button>
                    <Button className="btn btn-wish" variant="outlined"><FavoriteIcon/></Button>
                    <Button className="btn btn-filtrar" variant="outlined">Comprar</Button>
                </StyledCardContent>
            </StyledCardContent>
        </StyledCard>
    )
}
