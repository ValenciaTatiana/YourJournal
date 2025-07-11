import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/index';

import { useSelector } from "react-redux";
import { useForm } from "../../hooks/index"
import { useMemo } from 'react';

export const NoteView = () => {

    const { active: note } = useSelector(state => state.journal);
    const { body, title, date, formState, onInputChange } = useForm(note);

    const dateString = useMemo(() => {
        const dateNote = new Date(date);
        return dateNote.toUTCString();
    }, [date])

    return (
        <>
            <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                <Grid>
                    <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
                </Grid>
                <Grid>
                    <Button color='primary' sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Guardar
                    </Button>
                </Grid>

                <Grid container width='100%'>
                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un Titulo' label='Título' sx={{ border: 'none', mb: 1 }} name='title' value={title} onChange={onInputChange} />
                </Grid>
                <Grid container width='100%'>
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedio el día de hoy?' minRows={5} name='body' value={body} onChange={onInputChange} />
                </Grid>

                <ImageGallery />
            </Grid>
        </>
    )
}