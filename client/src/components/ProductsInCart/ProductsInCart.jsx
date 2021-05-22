import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, IconButton, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
        <Container  style={{ backgroundColor: '#cfe8fc', height: '5rem', display: 'flex', padding: 0, gap: '1rem', maxWidth: '100%' }}>
            <CardMedia className={classes.media} image={images && images[0] ? images[0].url : genericUrl} ></CardMedia>

            <Typography component='h2' style={{ width: '35%', alignSelf: 'center'}}>
                {name}
            </Typography>
            <div style={{ width: '20%', alignSelf: 'center', display: 'flex' }}>
                <IconButton onClick={() => dispatch(updateAmountToShoppingCart({ id, amount: amount > 1 ? amount - 1 : amount }))}><IndeterminateCheckBoxIcon /></IconButton>
                <TextField
                    id="standard-number"
                    label="Cantidad"
                    type="number"
                    value={amount}
                    InputProps={{
                        inputProps: {
                            min: '1', max: '10'
                        },
                        readOnly: true,
                    }}
                />
                <IconButton onClick={() => dispatch(updateAmountToShoppingCart({ id, amount: amount + 1 }))}><AddBoxIcon /></IconButton>
            </div>
            <Typography component='h2' style={{ width: '10%', alignSelf: 'center' }}>
                $ {price * amount}
            </Typography>

            <IconButton
                onClick={() => dispatch(removeFromShoppingCart(id))}
                variant="contained"
                color="secondary"
                style={{ width: '10%', alignSelf: 'center' }}>
                <DeleteForeverIcon />
            </IconButton>

        </Container >
    );
}