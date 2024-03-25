import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
    {
    id: "1",
    name: 'John Doe',
    email: 'jhoni@gmail.com',
    github: 'midudev'
  },
  {
    id: '2',
    name: 'Marianzco',
    email: 'maripi@gmail.com',
    github: 'kecotes'
  },
  {
    id: '3',
    name: 'Cazapumaaa',
    email: 'casasi@gmail.com',
    github: 'migithub'
  },
  {
    id: '4',
    name: 'Pelmarazo',
    email: 'pelma@gmail.com',
    github: 'migithub'
  },
];

export type UserId = string;

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

//Tenemos una funcion que se invoca a si misma, se invoca sola, la funcion pregunta constantemente
// hay algo guardado en el localStorage y si es asi lo retorna al estado inicial y si no devuelve el local
const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  if(persistedState){
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
          const id  = crypto.randomUUID();
          return [ ...state, { id, ...action.payload }];
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        }
    },
})

export default usersSlice.reducer;

export const { addNewUser, deleteUserById } = usersSlice.actions;