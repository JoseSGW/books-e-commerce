import React from 'react'
import Button from '@material-ui/core/Button';
import { StyledCardContent } from '../components/Card/Card.styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';



export const PurchaseButtons = () => {
    return (
        <StyledCardContent className="option-container">
            <Button className="btn btn-wish" variant="outlined"><ShoppingCartIcon /></Button>
            <Button className="btn btn-wish" variant="outlined"><FavoriteIcon /></Button>
            <Button className="btn btn-filtrar" variant="outlined">Comprar</Button>
        </StyledCardContent>
    )
}
