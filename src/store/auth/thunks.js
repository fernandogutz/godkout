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
                'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
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