import { NavLink, Link, useNavigate, useParams } from 'react-router-dom';

import './HeaderHome.css';

const HeaderProfile = ({title}) => {
    const navigate = useNavigate();
    const onBackNavigate = () => {
        navigate(-1);
    }
    
    const { username } = useParams();

    return (
        <>
            <div className="header">
                <div className='header__back'> <Link onClick={onBackNavigate}><i className="fa-solid fa-arrow-left"></i></Link></div>
                {/* Incorporar funcionalidad para que este btn sea un VOLVER, y te lleve siempre a la página anterior persistiendo la data que tenía, algo así como funciona el volver nativo del navegador */}

                <div className="header__title">@{title}</div>

                {
                    localStorage.getItem('username') === username 
                        ? <NavLink to='/settings'><i className="fa-solid fa-gear"></i></NavLink>
                        : <div></div>

                }
                
            </div>
        </>
    )
}

export default HeaderProfile