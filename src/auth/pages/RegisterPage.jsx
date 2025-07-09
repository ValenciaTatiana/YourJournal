import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/index';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe contener almenos 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const {status, errorMessage} = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const { formState, displayName, email, password, onInputChange, isFormValid, nameValid, emailValid, passwordValid } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <>
            <AuthLayout title="Crear Cuenta">

                <form onSubmit={onSubmit}>
                    <Grid container>

                        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Nombre" type="text" placeholder="Nombre" fullWidth autoComplete="nombre" name='displayName' value={displayName} onChange={onInputChange} error={!!nameValid && formSubmitted} helperText={nameValid} />
                        </Grid>

                        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Email" type="email" placeholder="Correo@correo.com" fullWidth autoComplete="email" name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={emailValid} />
                        </Grid>

                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label="Password" type="password" placeholder="Password" fullWidth autoComplete="current-password" name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={passwordValid} />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid size={{ xs: 12 }} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth>
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