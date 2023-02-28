import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useFetchPost from '../../hooks/useFetchPost';
import { setSuccessMsg } from '../../store/auth/authSlice';
import { updateUser } from '../../store/auth/thunks';
import HeaderPages from '../../ui/components/HeaderPages'
import './EditAvatar.css';


const EditAvatar = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setSuccessMsg(null));

    }, [])
    

    const { profileImg, jwt, id, updatingUserProfile, successMsg } = useSelector(state => state.auth);
    const [avatarUrl, setAvatarUrl] = useState(profileImg ? profileImg : 'superman.png');


    const onUpdateAvatar = (e) => {
        e.preventDefault();
        const endpoint = `https://young-falls-69772.herokuapp.com/api/users/${id}`
        console.log(jwt);
        console.log(endpoint);

        const postData = {
            profileImg: avatarUrl
        }

        const response = dispatch(updateUser(endpoint, jwt, postData));
        console.log(response)
    }

    return (
        <>
            <HeaderPages title='Cambiar Avatar'></HeaderPages>

            <div className="content">
                <h1 className='title__page'>Cambiar Avatar</h1>
                <form className="card card--editAvatar" onSubmit={e => onUpdateAvatar(e)}>

                    <div className="imgAvatarContainer">
                        <img src={`/avatars/${avatarUrl}`} className="EditAvatar__img" alt="preview img perfil" />
                    </div>

                    <label htmlFor="imgProfile">Elige tu Avatar</label>
                    <select defaultValue={avatarUrl} name="imgProfile" className='card__select' id="imgProfile" onChange={e => setAvatarUrl(e.target.value)}>
                        <option value="batman.png">Batman</option>
                        <option value="blackpanther.png">Black Panther</option>
                        <option value="blackwidow.png">Black Widow</option>
                        <option value="deadpool.png">Deadpool</option>
                        <option value="harley.png">Harley Quinn</option>
                        <option value="hitgirl.png">Hit Girl</option>
                        <option value="iron.png">Iron Man</option>
                        <option value="kickass.png">Kick Ass</option>
                        <option value="neytiri.png">Neytiri</option>
                        <option value="shehulk.png">She Hulk</option>
                        <option value="spiderwoman.png">Spider Woman</option>
                        <option value="spider.png">Spiderman</option>
                        <option value="storm.png">Storm</option>
                        <option value="thanos.png">Thanos</option>
                        <option value="thor.png">Thor</option>
                        <option value="vendetta.png">Anonymous</option>
                        <option value="superman.png">Super Man</option>
                        <option value="wonderwoman.png">Wonder Woman</option>
                    </select>

                    <button className='btn btn-primary width-100' disabled={updatingUserProfile} >Actualizar Avatar</button>

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

export default EditAvatar