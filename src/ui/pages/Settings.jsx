import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
                    <p className="settings__option">Dark Mode</p> {/* Simular checkbox, on/off */}
                    <p className="settings__option">Idioma</p> {/* Options, creo que funcionalmente podría meter todos los textos con su variación en Inglés en Strapi, y al cambiar esta configuración, cambiaré el context.textos */}
                    <p className="settings__option settings__logout" onClick={onLogout} >Cerrar Sesión</p>
                </div>
            </div>
        </>
    )
}

export default Settings