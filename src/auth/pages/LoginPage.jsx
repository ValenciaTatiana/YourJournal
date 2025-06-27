import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: 'tatidev@meli.com',
    password: 'TatiDev0631_'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }
  
  return (
    <>
      <AuthLayout title="Login">

        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label="Email" type="email" name='email' placeholder="Correo@correo.com" fullWidth autoComplete="email" value={email} onChange={onInputChange}/>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField label="Password" type="password" name='password' placeholder="Password" fullWidth autoComplete="current-password" value={password} onChange={onInputChange}/>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth onClick={onGoogleSignIn}>
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