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
        const API = `https://young-falls-69772.herokuapp.com/api/users/${id}?populate=*`;
        axios.get(API, {
            headers: {
                //token updated
                'Authorization': 'Bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8'
            }
        }).then(response => {
            //console.log(id)
            const userData = {
                photoURL: `https://young-falls-69772.herokuapp.com${response.data.profileImg.formats.thumbnail.url}`
            }
            dispatch(setUserData(userData))

        }).catch(error => {

        });

    }

}