import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    //border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Badge);

export default function CustomizedBadges() {
    const { ShoppingCartProduct } = useSelector((state) => state.shoppingCart)

    console.log(ShoppingCartProduct)
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={ShoppingCartProduct.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}