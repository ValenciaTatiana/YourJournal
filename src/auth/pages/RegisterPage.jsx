import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe contener almenos 6 caracteres'],
    name: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const { name, email, password, onInputChange, isFormValid, nameValid, emailValid, passwordValid } = useForm({
        name: '',
        email: '',
        password: ''
    }, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if(!isFormValid) return;
    }

    return (
        <>
            <AuthLayout title="Crear Cuenta">

                <form onSubmit={onSubmit}>
                    <Grid container>

                        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Nombre" type="text" placeholder="Nombre" fullWidth autoComplete="nombre" name='name' value={name} onChange={onInputChange} error={!!nameValid && formSubmitted} helperText={nameValid}/>
                        </Grid>

                        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Email" type="email" placeholder="Correo@correo.com" fullWidth autoComplete="email" name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={emailValid}/>
                        </Grid>

                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label="Password" type="password" placeholder="Password" fullWidth autoComplete="current-password" name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={passwordValid}/>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid size={{ xs: 12 }}>
                            <Button type='submit' variant='contained' fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">Ingresar</Link>
                    </Grid>

                </form>

            </AuthLayout>
        </>
    )
}