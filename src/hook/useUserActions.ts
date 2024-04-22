import { User, UserId, addNewUser, deleteUserById, loginApi } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const addUser = ({name, password, email, act1, act2, act3, firstTime, endTime }: User) => {
        dispatch(addNewUser({name, password, email, act1, act2, act3, firstTime, endTime }));
    };

    const login = ({name, password}: User) => {
        dispatch(loginApi({name, password}))
    }

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id));
    };

    return { addUser, removeUser, login };
}