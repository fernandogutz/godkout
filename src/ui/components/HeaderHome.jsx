import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import userImg from '../../profile/img/user.jpg';
import './HeaderHome.css';

const HeaderHome = () => {
    const { photoURL, username } = useSelector(state => state.auth);


    return (
        <>
            <div className="header">
                <h2 className='header__logo'>GODKOUT</h2>
                {/* <div className='header__settings'> <p><Link to="/settings">:</Link></p></div> */}
                <Link to={`/u/${username}`}>
                    {photoURL ? <img src={photoURL} alt="foto de perfil del atleta" className="header__profile-img" /> : <img src={userImg} alt="foto de perfil del atleta" className="header__profile-img" />}
                    
                </Link>
            </div>
        </>
    )
}

export default HeaderHome