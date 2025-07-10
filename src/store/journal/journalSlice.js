import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.status = 'authenticated';
        },        
        setActiveNote: (state, action) => {
            state.status = 'authenticated';
        },        
        setNotes: (state, action) => {
            state.status = 'authenticated';
        },        
        setSaving: (state, action) => {
            state.status = 'authenticated';
        },        
        updateNote: (state, action) => {
            state.status = 'authenticated';
        },        
        deleteNodeById: (state, action) => {
            state.status = 'authenticated';
        },
    }
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNodeById  } = journalSlice.actions;