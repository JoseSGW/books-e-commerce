import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';
import { Button, Typography } from '@material-ui/core';





export function ContainerProductsInCart() {

    const { ShoppingCartProduct } = useSelector(state => state.shoppingCart)

    useEffect(() => {
    }, [ShoppingCartProduct]);

    return (
        <Container style={{ maxWidth: '90vw', display: 'flex', padding: '2rem' }}>
            <Container style={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {
                    ShoppingCartProduct.map(p => {
                        console.log(p);
                        return <ProductsInCart {...p} />
                    }
                    )
                }

            </Container>
            <Container style={{ backgroundColor: '#cfe8fc', height: '25rem', display: 'flex', flexDirection: 'column', maxWidth: '20%', gap: '2rem' }}>
                <Typography>Total</Typography>
                <Typography>Descuentos aplicados</Typography>
                <Typography>Precio final a pagar</Typography>
                <Button variant="contained" color="primary">Pagar</Button>
            </Container>
        </Container>

    );
}