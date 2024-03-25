// La store es donde guardamos todo
import { configureStore, type Middleware } from '@reduxjs/toolkit';
import userReducer from './users/slice';

// Un middleware es un funcion que recupera la store, que tiene que devolver una funcion
// que recupera un metodo next que devuelve una funcion que devuelve una funcion que recupera un metodo action
// store es una funcion que devuelve de next en adelante, next devuelve de action en adelante y action lo del corchete

// Cada metodo pasa en un momento distinto y necesitamos poder trabajar en un momento especifico
// nuestra store, next hace que pasemos al siguiente evento y action la accion
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action); // Cualquier accion que hagas luego actualiza el localstorage
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

//const syncWithDatabaseMiddleware: Middleware = store => next => action => {
//	const { type, payload } = action
//	const previousState = store.getState() as RootState
//	next(action)

//	if (type === 'users/deleteUserById') { // <- eliminado un usuario
//		const userIdToRemove = payload
//		const userToRemove = previousState.users.find(user => user.id === userIdToRemove)

//		fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
//			method: 'DELETE'
//		})
//			.then(res => {
				// if (res.ok) {
				// 	toast.success(`Usuario ${payload} eliminado correctamente`)
				// }
//				throw new Error('Error al eliminar el usuario')
//			})
//			.catch(err => {
//				toast.error(`Error deleting user ${userIdToRemove}`)
//				if (userToRemove) store.dispatch(rollbackUser(userToRemove))
//				console.log(err)
//				console.log('error')
//			})
//	}
//}

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