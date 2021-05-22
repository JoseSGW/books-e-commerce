import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';


export function ContainerProductsInCart() {

    const { ShoppingCartProduct } = useSelector(state => state.shoppingCart)

    useEffect(() => {

    }, [ShoppingCartProduct]);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                {
                    ShoppingCartProduct?.map(p => <ProductsInCart {...p} />)
                }
            </Container>
        </>
    );
}