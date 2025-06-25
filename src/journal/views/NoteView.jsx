import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/index';

export const NoteView = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                <Grid>
                    <Typography fontSize={39} fontWeight='light'>31 de Enero, 2025</Typography>
                </Grid>
                <Grid>
                    <Button color='primary' sx={{ padding: 2 }}>
                        <SaveOutlined sx={{fontSize: 30, mr: 1}}/> Guardar
                    </Button>
                </Grid>

                <Grid container width='100%'>
                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un Titulo' label='Título' sx={{border: 'none', mb: 1}}/>
                </Grid>
                <Grid container width='100%'>
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedio el día de hoy?' minRows={5}/>
                </Grid>

                <ImageGallery />
            </Grid>
        </>
    )
}