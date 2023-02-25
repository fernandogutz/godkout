import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderHome.css';

const HeaderHome = () => {
    const { photoURL, username, status } = useSelector(state => state.auth);


    return (
        <>
            <div className="header">
                <Link to='/'><h2 className='header__logo'>GODKOUT <i className="fa-solid fa-circle-info"></i></h2></Link>
                {/* <div className='header__settings'> <p><Link to="/settings">:</Link></p></div> */}

                {
                    status === 'authenticated'
                    ?   <Link to={`/u/${username}`}>
                            {photoURL ? <img src={photoURL} alt="foto de perfil del atleta" className="header__profile-img" /> : <img src='/avatars/zeus.png' alt="foto de perfil del atleta" className="header__profile-img" />}
                        
                        </Link>

                    : <Link to='/login'><button className='btn btn-primary'>Iniciar Sesión</button></Link>

                }
                
            </div>
        </>
    )
}

export default HeaderHome