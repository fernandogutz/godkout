import { Link } from 'react-router-dom';

import ferImg from '../../profile/img/fer.jpg';
import './HeaderHome.css';

const HeaderHome = () => {
    return (
        <>
            <div className="header">
                <h2 className='header__logo'>GODKOUT</h2>
                {/* <div className='header__settings'> <p><Link to="/settings">:</Link></p></div> */}
                <Link to='/profile'>
                    <img src={ferImg} alt="foto de perfil del atleta" className="header__profile-img" />
                </Link>
            </div>
        </>
    )
}

export default HeaderHome