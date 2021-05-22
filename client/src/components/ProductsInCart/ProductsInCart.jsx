import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';

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
        <Container width='100%' className={classes.separate}>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '5rem', display: 'flex'}}>
                <CardMedia className={classes.media} image={images[0] ? images[0].url : genericUrl} ></CardMedia>
                <div className="name-product" style={{width: '60%'}}>
                    <h2>{name}</h2>
                </div>
                <div className="price-product" style={{width: '20%'}}>
                    <h2>{price}</h2>
                </div>
                <div className="detele-product" style={{width: '10%'}}>
                    <h2>Eliminar</h2>
                </div>
            </Typography>
        </Container>
    );
}