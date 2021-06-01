import { Button, Container, FormGroup, FormHelperText, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useForm } from '../../../hooks/useForm'


export const SignIn = () => {

    const [values, handleInputChange, setValues] = useForm({usuario: '', email: '', password: ''})

    const handleSubmit = () => {
        fetch(`http://localhost:3001/users/addUser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(data => console.log(data))

    }

    const theme = useTheme()

    const { usuario, email, password } = values && values;

    return (
        <Container style={{ maxWidth: '50%' }}>
            <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                <Typography component='h2'>Regístrate</Typography>
                <TextField
                    id="standard-text-input"
                    label="Nombre de usuario"
                    name='usuario'
                    type="text"
                    variant="outlined"
                    value={usuario}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    id="standard-email-input"
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    name='email'
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    name='password'
                    value={password}
                    onChange={(e) => handleInputChange(e)}
                />
                <Button
                    style={{
                        color: `${theme.styles.colorSecundario}`,
                        background: `${theme.styles.colorPrimarioClaro}`
                    }}
                    onClick={handleSubmit}
                >Registrarse
                </Button>
            </form>
        </Container>
    )
}
