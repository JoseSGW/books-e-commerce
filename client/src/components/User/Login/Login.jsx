import { Button, Container, FormGroup, FormHelperText, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from 'styled-components'
import { setUser } from '../../../actions/userLoggedIn'
import { useForm } from '../../../hooks/useForm'


export const Login = () => {
    const theme = useTheme()

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
                console.log(user)
                dispatch(setUser(user))
            })
    }

    const { username, password } = user;

    return (
        <Container style={{ maxWidth: '50%' }}>
            <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                <Typography component='h2'>Inicia Sesión</Typography>
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
                >Iniciar sesión
                </Button>
            </form>
        </Container>
    )
}