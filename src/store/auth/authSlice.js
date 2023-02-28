import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'checking', 'authenticated'   // PD: Esos los 3 posibles status
        id: null,
        email: null,
        displayName: null,
        username: null,
        profileImg: null,
        bio: null,
        jwt: null,
        errorMessage: null, //login strapi msg
        errorMessageFrontend: null, //x mí en español
        errorMessageRegister: null, //register strapi msg
        errorMessageRegisterFrontend: null, //x mí en español
        successMsg: null,
        updatingUserProfile: false,
        usernameErrorMsg: null,
    },
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.username = action.payload.username;
            state.profileImg = action.payload.profileImg;
            state.jwt = action.payload.jwt;
            state.errorMessage = null;
            state.errorMessageFrontend = null;

        },
        logout: (state, payload) => {
            localStorage.clear();
            state.status = 'not-authenticated';
            state.id = null;
            state.email = null;
            state.displayName = null;
            state.username = null;
            state.profileImg = null;
            state.jwt = null;

            state.errorMessage = null; //login strapi msg
            state.errorMessageFrontend = null; //x mí en español

            state.errorMessageRegister = null; //register strapi msg
            state.errorMessageRegisterFrontend = null; //x mí en español

        },
        checkingCredentials: (state, action) => {
            state.status = action.payload;
        },
        //Login errors
        setErrors: (state, action) => { 
            state.errorMessage = action.payload; // Primero guardar el mensaje que llega de Strapi

            // EN base al mensaje que llegó de Strapi, setear otro mensaje en español para mostrar a los usuarios.
            switch (action.payload) {
                case 'identifier is a required field':
                    state.errorMessageFrontend = 'Debe ingresar su email o username';
                    break;
                case 'password is a required field':
                    state.errorMessageFrontend = 'Debe ingresar su contraseña';
                    break;
                case '2 errors occurred':
                    state.errorMessageFrontend = 'Ingrese un identificador y contraseña válidos';
                    break;
                default:
                    state.errorMessageFrontend = 'Email/username o contraseña incorrecto';

            }
            
        },
        //Register errors
        setErrorsRegister: (state, action) => { 
            state.errorMessageRegister = action.payload; // Primero guardar el mensaje que llega de Strapi

            //TODO: Estos casos son un copy paste de los errores de Login, por lo cual siempre se verá el default
            switch (action.payload) {
                case 'identifier is a required field':
                    state.errorMessageRegisterFrontend = 'Debe ingresar su email o username';
                    break;
                case 'password is a required field':
                    state.errorMessageRegisterFrontend = 'Debe ingresar su contraseña';
                    break;
                case '2 errors occurred':
                    state.errorMessageRegisterFrontend = 'Ingrese un identificador y contraseña válidos';
                    break;
                default:
                    state.errorMessageRegisterFrontend = 'Email, Username o contraseña inválido';

            }
            
        },
        setUserData: (state, action) => {
            state.profileImg = action.payload.profileImg;
            state.username = action.payload.username;
            state.displayName = action.payload.displayName;
            state.bio = action.payload.bio;
        },
        setUpdatingUserProfile: (state, action) => {
            state.updatingUserProfile = action.payload;
        },
        setSuccessMsg : (state, action) => {
            state.successMsg = action.payload;
        },
        setUsernameErrorMsg: (state, action) => {
            state.usernameErrorMsg = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, setErrors, setErrorsRegister, setUserData, setUpdatingUserProfile, setSuccessMsg, setUsernameErrorMsg } = authSlice.actions;