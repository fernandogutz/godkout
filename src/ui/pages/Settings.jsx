import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/authSlice';
import HeaderPages from '../components/HeaderPages';
import './Settings.css';

const Settings = () => {
    const dispatch = useDispatch();
    
    const onLogout = () => {

        dispatch(logout());

       /*  navigate('/login', {
            replace: true
        }); */
    }

    

    return (
        <>
            <HeaderPages title="Configuración"></HeaderPages>
            <div className="content">
                <div className="settings">
                    <Link to='/settings/edit-avatar' className="settings__option">Cambiar Avatar</Link>
                    <Link to='/settings/edit-profile' className="settings__option">Editar Perfil</Link>
                    <Link className="settings__option settings__logout" onClick={onLogout} >Cerrar Sesión</Link>
                </div>
            </div>
        </>
    )
}

export default Settings