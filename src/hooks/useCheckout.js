import { useDispatch, useSelector } from "react-redux";
import { checkingCredentials, login } from "../store/auth/authSlice";


export const useCheckout = () => {
    const dispatch = useDispatch();

    if (localStorage.getItem('id') && localStorage.getItem('jwt')) {
        dispatch(login({
            id: localStorage.getItem('id'),
            jwt: localStorage.getItem('jwt'),
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            displayName: localStorage.getItem('displayName'),
        }));
        dispatch(checkingCredentials('authenticated'));

    } else {
        localStorage.clear();
        dispatch(checkingCredentials('not-authenticated'));

    }

}
