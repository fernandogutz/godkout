import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderHome.css';

const HeaderHome = () => {
    const { photoURL, username } = useSelector(state => state.auth);


    return (
        <>
            <div className="header">
                <Link to='/ranking'><h2 className='header__logo'>GODKOUT</h2></Link>
                {/* <div className='header__settings'> <p><Link to="/settings">:</Link></p></div> */}
                <Link to={`/u/${username}`}>
                    {photoURL ? <img src={photoURL} alt="foto de perfil del atleta" className="header__profile-img" /> : <img src='/avatars/zeus.png' alt="foto de perfil del atleta" className="header__profile-img" />}
                    
                </Link>
            </div>
        </>
    )
}

export default HeaderHome