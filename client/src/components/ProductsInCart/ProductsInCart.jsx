import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, makeStyles, IconButton, TextField } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { removeFromShoppingCart, updateAmountToShoppingCart } from '../../actions/ShoppingCart';
import { useDispatch } from 'react-redux';

const genericUrl = "https://www.julianmarquina.es/wp-content/uploads/Para-efecto-legales-un-libro-es-todo-impreso-no-periodico-que-contiene-49-paginas-o-mas.jpg"


const useStyles = makeStyles(theme => ({
    media: {
        height: '100%',
        width: '10%',
    },
    separate: {
        marginTop: '2rem',
        marginBottom: '2rem',
    }
}))

export function ProductsInCart({ name, amount, id, images, price }) {

    const dispatch = useDispatch()

    const classes = useStyles();

    return (
        <Container className={classes.separate} style={{ backgroundColor: '#cfe8fc', height: '5rem', display: 'flex', width: '70%', padding: 0 }}>
            <CardMedia className={classes.media} image={images && images[0] ? images[0].url : genericUrl} ></CardMedia>

            <Typography component='h2' style={{ width: '40%', alignSelf: 'center', margin: '0 auto' }}>
                {name}
            </Typography>
            <div style={{ width: '15%', alignSelf: 'center', display: 'flex' }}>
                <IconButton onClick={() => dispatch(updateAmountToShoppingCart({id, amount: amount > 1 ? amount - 1 : amount}))}><IndeterminateCheckBoxIcon /></IconButton>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    value={amount}
                    InputProps={{
                        inputProps: {
                            min: '1', max: '10'
                        },
                        readOnly: true,
                    }}
                />
                <IconButton onClick={() => dispatch(updateAmountToShoppingCart({id, amount: amount + 1}))}><AddBoxIcon /></IconButton>
            </div>
            <Typography component='h2' style={{ width: '10%', alignSelf: 'center' }}>
                $ {price * amount}
            </Typography>
            <Typography style={{ width: '15%', alignSelf: 'center' }}>
                <Button onClick={() => dispatch(removeFromShoppingCart(id))} variant="contained" color="secondary">Eliminar</Button>
            </Typography>
        </Container >
    );
}