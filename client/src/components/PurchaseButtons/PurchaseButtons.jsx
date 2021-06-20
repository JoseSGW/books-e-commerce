import React from 'react'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { StyledCardContent } from './PurchaseButtons.styles';
import { addToShoppingCart } from '../../actions/ShoppingCart';
import { useDispatch } from 'react-redux';




export const PurchaseButtons = ({product}) => {

    const dispatch = useDispatch()

    return (
        <StyledCardContent className="option-container">
            <Button className="btn btn-wish" variant="outlined"><FavoriteIcon /></Button>
            <Button
                onClick={() => dispatch(addToShoppingCart(product))}
                className="btn btn-filtrar"
                variant="outlined"
            > Agregar
                <ShoppingCartIcon />
            </Button>
        </StyledCardContent>
    )
}
