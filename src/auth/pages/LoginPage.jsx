import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startLoginWithEmailPassword, startGoogleSignIn } from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <>
      <AuthLayout title="Login">

        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField label="Email" type="email" name='email' placeholder="Correo@correo.com" fullWidth autoComplete="email" value={email} onChange={onInputChange} />
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField label="Password" type="password" name='password' placeholder="Password" fullWidth autoComplete="current-password" value={password} onChange={onInputChange} />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid size={{ xs: 12 }} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button type='submit' variant='contained' fullWidth disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
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