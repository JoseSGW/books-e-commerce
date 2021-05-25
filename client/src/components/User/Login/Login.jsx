import { Button, Container, FormGroup, FormHelperText, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useTheme } from 'styled-components'


export const Login = () => {
    const theme = useTheme()

    return (
        <Container style={{ maxWidth: '50%' }}>
            <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                <Typography component='h2'>Inicia Sesión</Typography>
                <TextField
                    id="standard-email-input"
                    label="Email"
                    type="email"
                    variant="outlined"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                />
                <Button style={{
                    color: `${theme.styles.colorSecundario}`,
                    background: `${theme.styles.colorPrimarioClaro}`
                }}>Iniciar sesión</Button>
            </form>
        </Container>
    )
}