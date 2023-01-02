import { checkingCredentials, login, setErrors, setErrorsRegister } from "./authSlice";
import { useCheckCredentials } from '../../auth/hooks/useCheckCredentials'
import { useRegisterUser } from "../../auth/hooks/useRegisterUser";

export const checkingAuthentication = (identifier, password) => {
    return async (dispatch) => {
        // 1) Activate Loading
        dispatch(checkingCredentials('checking'));

        // 2) Fetch DB (luego lo optimizaré con useEffect y un custom hook de checkLogin)
        const response = await useCheckCredentials(identifier, password);

        // 3) Disparar el reducer de login, que permite al usuario acceder a la app
        if(!response.error && response.jwt) {
            dispatch(login({
                identifier,
                password,
                jwt: response.jwt,
                email: response.email,
                displayName: response.displayName,
                id: response.id,
                username: response.username
            }));
            
            localStorage.setItem('id', response.id);
            localStorage.setItem('jwt', response.jwt);
            localStorage.setItem('email', response.email);
            localStorage.setItem('displayName', response.displayName);
            localStorage.setItem('username', response.username);

            dispatch(checkingCredentials('authenticated'));
            
        } else {
            dispatch(setErrors(response.error));
            dispatch(checkingCredentials('not-authenticated'));
        }
    }
}



export const registerUser = (email, username, password, getAds) => {
    return async (dispatch) => {
        // 1) Activate Loading
        dispatch(checkingCredentials('checking'));

        // 2) Fetch DB registro usuario y dispatch de errores de registros
        const registerResponse = await useRegisterUser(email, username, password, getAds);

        if(registerResponse.email && !registerResponse.error) {

            //Login
            console.log(registerResponse.email);
            dispatch(checkingAuthentication(registerResponse.email, password));

        } else {
            console.log(registerResponse.error)
            dispatch(setErrorsRegister(registerResponse.error));
            dispatch(checkingCredentials('not-authenticated'));
        }

    }
}