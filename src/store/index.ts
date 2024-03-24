// La store es donde guardamos todo
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/slice'

export const store = configureStore({
    reducer: {
        users: userReducer
    }
})