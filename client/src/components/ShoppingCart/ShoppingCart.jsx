import React from 'react';
import Badge from '@material-ui/core/Badge';
import { useDispatch, useSelector } from "react-redux"
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export const ShoppingCart = () => {
    const state = useSelector(state => state.ShoppingCart)
    console.log(state)
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    )
}