import { createSlice } from '@reduxjs/toolkit';

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: string;
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
    name: 'Cazapum',
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
    reducers: {}
})

export default usersSlice.reducer