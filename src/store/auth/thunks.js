import { checkingCredentials, login, setErrors, setErrorsRegister, setUserData } from "./authSlice";
import { useCheckCredentials } from '../../auth/hooks/useCheckCredentials'
import { useRegisterUser } from "../../auth/hooks/useRegisterUser";
import axios from "axios";

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
                photoURL: response.photoURL,
                id: response.id,
                username: response.username
            }));
            
            localStorage.setItem('id', response.id);
            localStorage.setItem('jwt', response.jwt);
            localStorage.setItem('email', response.email);
            localStorage.setItem('displayName', response.displayName);
            localStorage.setItem('username', response.username);

            dispatch(checkingCredentials('authenticated'));
            dispatch(getUserData(response.id));
            
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

export const getUserData = id => {

    return dispatch => {
        
        
        // QUERY
        const API = `http://localhost:1337/api/users/${id}?populate=*`;
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
            }
        }).then(response => {
            //console.log(id)
            const userData = {
                photoURL: `http://localhost:1337${response.data.profileImg.formats.thumbnail.url}`
            }
            dispatch(setUserData(userData))

        }).catch(error => {

        });

    }

}