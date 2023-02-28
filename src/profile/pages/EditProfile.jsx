import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { setSuccessMsg, setUsernameErrorMsg } from '../../store/auth/authSlice';
import { getUserByUsername, updateUser } from '../../store/auth/thunks';
import HeaderPages from '../../ui/components/HeaderPages'
import './EditProfile.css';


const EditProfile = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSuccessMsg(null));

    }, [])


    const { username, displayName, bio, jwt, id, updatingUserProfile, usernameErrorMsg, successMsg } = useSelector(state => state.auth);

    const initialForm = {
        usernameInput: username,
        displayNameInput: displayName && displayName !== 'null' ? displayName : '',
        bioInput: bio ? bio : '',
    }

    const { usernameInput, displayNameInput, bioInput, onInputChange } = useForm(initialForm);

    const onUpdateAvatar = (e) => {
        e.preventDefault();
        const endpoint = `https://young-falls-69772.herokuapp.com/api/users/${id}`
        console.log(jwt);
        console.log(endpoint);

        const postData = {
            username: usernameInput,
            displayName: displayNameInput,
            bio: bioInput,
        }

        console.log(postData);
        dispatch(updateUser(endpoint, jwt, postData));
    }

    const onCheckingUsername = (usernameValue) => {
        dispatch(setUsernameErrorMsg(null));
        const endpoint = `https://young-falls-69772.herokuapp.com/api/users?filters[username][$eq]=${usernameValue}`
        dispatch(getUserByUsername(endpoint, jwt, username)); // El username actual del usuario

    }

    return (
        <>
            <HeaderPages title='Editar Perfil'></HeaderPages>

            <div className="content">
                <h1 className='title__page'>Editar Perfil</h1>
                <form className="card card--editAvatar" onSubmit={e => onUpdateAvatar(e)}>

                    <label htmlFor="usernameInput">Username (en minúscula y sin espacios)</label>
                    {usernameErrorMsg && <div className="card__errorMsg">{usernameErrorMsg}</div>}
                    <input 
                        type="text" 
                        name="usernameInput" 
                        id="usernameInput" 
                        className="card__input" 
                        placeholder='Ej: hannibal_king' 
                        onChangeCapture={e => onCheckingUsername(e.target.value)}
                        value={usernameInput}
                        onChange={onInputChange} 
                        required
                    />

                    <label htmlFor="displayNameInput">Nombre y apellido</label>
                    <input 
                        type="text" 
                        name="displayNameInput" 
                        id="displayNameInput" 
                        className="card__input" 
                        placeholder='Ej: Hannibal King' 
                        value={displayNameInput}
                        onChange={onInputChange}
                        required
                    />


                    <label htmlFor="bioInput">Bio</label>
                    <textarea 
                        name="bioInput" 
                        id="bioInput" 
                        className='card__input' 
                        cols="30" rows="10" 
                        maxLength="100"
                        value={bioInput}
                        onChange={onInputChange}
                        required
                    ></textarea>



                    <button className='btn btn-primary width-100' disabled={updatingUserProfile}>Actualizar Perfil</button>

                    {
                        successMsg ?
                            <div className="card__successMsg">
                                {successMsg}
                            </div>

                            : null
                    }

                </form>



            </div>
        </>
    )
}

export default EditProfile