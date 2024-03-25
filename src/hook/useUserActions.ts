import { User, UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const addUser = ({name, email, act1, act2, act3, firstTime, endTime }: User) => {
        dispatch(addNewUser({name, email, act1, act2, act3, firstTime, endTime }));
    };

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id));
    };

    return { addUser, removeUser };
}