import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';
import { Box, Button, Typography } from '@material-ui/core';
import { useTheme } from 'styled-components'




export function ContainerProductsInCart() {

    const { ShoppingCartProduct } = useSelector(state => state.shoppingCart)

    const theme = useTheme()

    let totalPrice = 0

    useEffect(() => {

    }, [ShoppingCartProduct]);

    return (
        <Container style={{ maxWidth: '90vw', display: 'flex', padding: '2rem' }}>
            <Container style={{ maxWidth: '70%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {
                    ShoppingCartProduct.map(p => {
                        totalPrice += p.price * p.amount;
                        return <ProductsInCart {...p} />
                    })
                }

            </Container>
            <Container style={{ backgroundColor: theme.styles.colorPrimarioClaro, height: '25rem', display: 'flex', flexDirection: 'column', maxWidth: '20%', gap: '2rem' }}>
                <Box bgcolor={theme.styles.colorSecundario} style={{padding: '1rem'}}>
                    <Typography>Total</Typography>
                    <Typography>{totalPrice}</Typography>
                </Box>

                <Box bgcolor={theme.styles.colorSecundario}>
                    <Typography>Descuentos aplicados</Typography>
                </Box>

                <Box bgcolor={theme.styles.colorSecundario}>
                    <Typography>Precio final a pagar</Typography>
                    <Typography>{totalPrice}</Typography>
                </Box>

                <Button variant="contained" color="primary">Pagar</Button>
            </Container>
        </Container>

    );
}