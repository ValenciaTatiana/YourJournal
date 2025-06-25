import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <>
            <AuthLayout title="Crear Cuenta">

                <form>
                    <Grid container>

                        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Nombre" type="text" placeholder="Nombre" fullWidth autoComplete="nombre" />
                        </Grid>

                        <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                            <TextField label="Email" type="email" placeholder="Correo@correo.com" fullWidth autoComplete="email" />
                        </Grid>

                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                        <TextField label="Password" type="password" placeholder="Password" fullWidth autoComplete="current-password" />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid size={{ xs: 12 }}>
                            <Button variant='contained' fullWidth>
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