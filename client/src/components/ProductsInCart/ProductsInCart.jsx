import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, Divider, makeStyles } from '@material-ui/core';

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

    const classes = useStyles();

    return (
        <Container className={classes.separate} style={{ backgroundColor: '#cfe8fc', height: '5rem', display: 'flex', width: '70%', padding: 0 }}>
            <CardMedia className={classes.media} image={images[0] ? images[0].url : genericUrl} ></CardMedia>

            <Typography component='h2' className="name-product" style={{ width: '50%', alignSelf: 'center', margin: '0 auto' }}>
                {name}
            </Typography>
            <Typography component='h2' className="amount-product" style={{ width: '5%', alignSelf: 'center' }}>
                {amount}
            </Typography>
            <Typography component='h2' className="price-product" style={{ width: '10%', alignSelf: 'center'}}>
            $ {price * amount}
            </Typography>
            <Typography className="detele-product" style={{ width: '15%', alignSelf: 'center' }}>
                <Button variant="contained" color="secondary">Eliminar</Button>
            </Typography>
        </Container>
    );
}