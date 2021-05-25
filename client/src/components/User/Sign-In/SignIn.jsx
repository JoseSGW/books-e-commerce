import { Button, Container, FormGroup, FormHelperText, Input, InputLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useTheme } from 'styled-components'


export const SignIn = () => {
    const theme = useTheme()

    return (
        <Container style={{ maxWidth: '50%' }}>
            <form style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                <Typography component='h2'>Regístrate</Typography>
                <TextField
                    id="standard-text-input"
                    label="Nombre de usuario"
                    type="text"
                    variant="outlined"
                />
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
                }}>Registrarse</Button>
            </form>
        </Container>
    )
}
