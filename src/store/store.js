import { configureStore } from '@reduxjs/toolkit'; //Función para la creación del store
import { authSlice } from './auth/index';
import { journalSlice } from './journal/index';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
})