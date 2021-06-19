import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';
import { Box, Button, Divider, Typography } from '@material-ui/core';
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
            <Container style={{
                border: `2px solid ${theme.styles.colorPrimarioClaro}`,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '20%',
                gap: '2rem',
                padding: '1rem'
            }}>
                <Box bgcolor={theme.styles.colorSecundario} style={{ padding: '1rem' }}>
                    <Typography>Total:</Typography>
                    <Typography>$ {totalPrice}</Typography>
                </Box>
                <Divider />
                <Box bgcolor={theme.styles.colorSecundario}>
                    <Typography>Descuentos aplicados:</Typography>
                </Box>
                <Divider />
                <Box bgcolor={theme.styles.colorSecundario}>
                    <Typography>Precio final a pagar:</Typography>
                    <Typography>$ {totalPrice}</Typography>
                </Box>
                <Divider />
                <Button variant="contained" color="primary">Pagar</Button>
            </Container>
        </Container>

    );
}