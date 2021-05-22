import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { ProductsInCart } from '../ProductsInCart/ProductsInCart';


export function ContainerProductsInCart() {

    const { ShoppingCartProduct } = useSelector(state => state.shoppingCart)

    useEffect(() => {
    }, [ShoppingCartProduct]);
    console.log("soy el contenedor", ShoppingCartProduct)
    return (
        <Container maxWidth="lg">
            {
                ShoppingCartProduct.map(p => {
                    console.log(p);
                    return <ProductsInCart {...p} />
                }
                )

            }
        </Container>

    );
}