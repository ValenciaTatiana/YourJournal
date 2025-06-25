import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login">

        <form>
          <Grid container>
            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label="Email" type="email" placeholder="Correo@correo.com" fullWidth autoComplete="email" />
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField label="Password" type="password" placeholder="Password" fullWidth autoComplete="current-password" />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">Crear Cuenta</Link>
          </Grid>

        </form>

      </AuthLayout>
    </>
  )
}