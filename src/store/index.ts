// La store es donde guardamos todo
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/slice';

export const store = configureStore({
    reducer: {
        users: userReducer
    }
});

// De la funcion store.getStore que creamos arriba de el tipo que tenemos arriba
// El tipo que devuelva ReturnType sea el que tenemos en el contexto
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;