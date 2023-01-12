import { Link, useNavigate } from 'react-router-dom';

import ferImg from '../../profile/img/fer.jpg';
import './HeaderHome.css';

const HeaderPages = ({title}) => {

    const navigate = useNavigate();
    const onBackNavigate = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="header">
                <div className='header__back'> <Link onClick={onBackNavigate}><i className="fa-solid fa-arrow-left"></i></Link></div>
                {/* Incorporar funcionalidad para que este btn sea un VOLVER, y te lleve siempre a la página anterior persistiendo la data que tenía, algo así como funciona el volver nativo del navegador */}

                <div className="header__title">{title}</div>

                <div></div>

            </div>
        </>
    )
}

export default HeaderPages