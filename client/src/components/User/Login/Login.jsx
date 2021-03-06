import { Button, Container, FormGroup, FormHelperText, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useTheme } from 'styled-components'
import { addToShoppingCart, clearShoppingCart } from '../../../actions/ShoppingCart'
import { setUser } from '../../../actions/userLoggedIn'
import { useForm } from '../../../hooks/useForm'


export const Login = () => {
    const theme = useTheme()

    const history = useHistory()

    const dispatch = useDispatch()

    const [user, handleInputChange] = useForm({ username: '', password: '' })

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(user => {
                const { order } = user;
                
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(setUser(user))
                
                const guestShoppingCart = JSON.parse(localStorage.getItem('guestShoppingCart')) 
                dispatch(clearShoppingCart())

                if(guestShoppingCart && order){ //si existia carrito como invitado se combina con la order de usuario logeado
                    guestShoppingCart.forEach(productSC => {
                        const alreadyExist = order.find(elementOrder => elementOrder.id === productSC.id)
                        alreadyExist ? alreadyExist.amount += productSC.amount : order.concat(productSC)
                    })
                }
                
                if(order) dispatch(addToShoppingCart(order))           
                history.push("/");
            })
            .catch(error => console.error('Error:', error))
    }

    

    const { username, password } = user;

    return (
        <Container style={{ maxWidth: '50%' }}>
            <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                <Typography component='h2'>Inicia Sesi??n</Typography>
                <TextField
                    label="Email"
                    type="email"
                    name='username'
                    variant="outlined"
                    value={username}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    name='password'
                    variant="outlined"
                    value={password}
                    onChange={handleInputChange}
                />
                <Button style={{
                    color: `${theme.styles.colorSecundario}`,
                    background: `${theme.styles.colorPrimarioClaro}`
                }}
                    onClick={handleLogin}
                >Iniciar sesi??n
                </Button>
            </form>
        </Container>
    )
}