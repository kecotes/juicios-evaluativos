import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserId = string;

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = [
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
]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        }
    }
})

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;