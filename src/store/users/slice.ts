import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
    {
    id: "1",
    name: 'Juan Mengual',
    password: '1234',
    email: 'jhoni@gmail.com',
    token: null,
    act1: 'Levantar servidor',
    act2: 'Mantener servidor',
    act3: 'Encender server',
    firstTime: '7:00:00',
    endTime: '22:00:00'
  },
  {
    id: '2',
    name: 'Marianzco Gonzales',
    password: '1234',
    token: null,
    email: 'maripi@gmail.com',
    act1: 'Activar servidor',
    act2: 'Mantener servidor',
    act3: 'Mejorar server',
    firstTime: '7:00:00',
    endTime: '22:00:00'
  },
  {
    id: '3',
    name: 'Cazapumaaa Velez',
    password: '1234',
    token: null,
    email: 'casasi@gmail.com',
    act1: 'Levantar Aplicion',
    act2: 'Mantener APP',
    act3: 'Encender Dependencias',
    firstTime: '7:00:00',
    endTime: '13:00:00'
  },
  {
    id: '4',
    name: 'Manuel Pelmarazo',
    password: '1234',
    token: null,
    email: 'pelma@gmail.com',
    act1: 'Poner Musica',
    act2: 'Atender Clientes',
    act3: 'Encender Luces',
    firstTime: '7:00:00',
    endTime: '22:00:00'
  },
];

export type UserId = string;

export interface User {
    name: string;
    password: string;
    token?: string,
    email?: string;
    act1?: string;
    act2?: string;
    act3?: string;
    firstTime?: string;
    endTime?: string;
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


const loginApi = createAsyncThunk(
  'users/loginApi',
  async({name, password}) => {
    const request = await axios.post(`http://localhost:8000/api/auth`, {name, password})
    const response = await request.data.data;
    localStorage.setItem('user', JSON.stringify(response))
    return response;
  }
);

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
        },
        rollbackUser: (state, action: PayloadAction<UserWithId>) => {
          const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
          if (!isUserAlreadyDefined) {
            state.push(action.payload)
          }
        }
    },
    extraReducers: (builder) => {
      builder
      .addCase(loginApi.pending, (state, action) => {
        state.token = action.payload
      })
    }
})

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;