import Grid from '@mui/material/Grid';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/index';

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/index";
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startSaveNote, startUploadingFiles, startDeletingNote } from '../../store/journal/index';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved } = useSelector(state => state.journal);
    const { body, title, date, formState, onInputChange } = useForm(note);

    const dateString = useMemo(() => {
        const dateNote = new Date(date);
        return dateNote.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if(messageSaved.length > 0) {
            Swal.fire('Nota Actualizada', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;

        dispatch(startUploadingFiles(target.files))
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    }
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                <Grid>
                    <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
                </Grid>
                <Grid>
                    <input type="file" multiple ref={fileInputRef} onChange={onFileInputChange} style={{display: 'none'}}/>

                    <IconButton color='primary' onClick={() => fileInputRef.current.click()}>
                        <UploadOutlined/>
                    </IconButton>

                    <Button color='primary' sx={{ padding: 2 }} onClick={onSaveNote}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Guardar
                    </Button>
                </Grid>

                <Grid container width='100%'>
                    <TextField type='text' variant='filled' fullWidth placeholder='Ingrese un Titulo' label='Título' sx={{ border: 'none', mb: 1 }} name='title' value={title} onChange={onInputChange} />
                </Grid>
                <Grid container width='100%'>
                    <TextField type='text' variant='filled' fullWidth multiline placeholder='¿Qué sucedio el día de hoy?' minRows={5} name='body' value={body} onChange={onInputChange} />
                </Grid>

                <Grid container justifyContent='end'>
                    <Button onClick={onDelete} sx={{mt: 2}} color='error'>
                        <DeleteOutline/> Borrar
                    </Button>
                </Grid>

                <ImageGallery images={note.imageUrls}/>
            </Grid>
        </>
    )
}