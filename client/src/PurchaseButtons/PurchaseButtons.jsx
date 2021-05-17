import React from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { StyledCardContent } from './PurchaseButtons.styles';



export const PurchaseButtons = () => {
    return (
        <StyledCardContent className="option-container">
            <Button className="btn btn-wish" variant="outlined"><FavoriteIcon /></Button>
            <Button className="btn btn-filtrar" variant="outlined"> Añadir al carrito <ShoppingCartIcon/> </Button>
        </StyledCardContent>
    )
}
