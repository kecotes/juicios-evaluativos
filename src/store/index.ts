// La store es donde guardamos todo
import { configureStore, type Middleware } from '@reduxjs/toolkit';
import userReducer from './users/slice';

// Un middleware es un funcion que recupera la store, que tiene que devolver una funcion
// que recupera un metodo next que devuelve una funcion que devuelve una funcion que recupera un metodo action
// store es una funcion que devuelve de next en adelante, next devuelve de action en adelante y action lo del corchete

// Cada metodo pasa en un momento distinto y necesitamos poder trabajar en un momento especifico
// nuestra store, next hace que pasemos al siguiente evento y action la accion
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
    }
});

// De la funcion store.getStore que creamos arriba de el tipo que tenemos arriba
// El tipo que devuelva ReturnType sea el que tenemos en el contexto
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;