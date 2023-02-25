import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import './HeaderHome.css';

const HeaderHome = () => {
    const { profileImg, username, status } = useSelector(state => state.auth);


    return (
        <>
            <div className="header">
                <Link to='/'><h2 className='header__logo'>GODKOUT <i className="fa-solid fa-circle-info"></i></h2></Link>
                {/* <div className='header__settings'> <p><Link to="/settings">:</Link></p></div> */}

                {
                    status === 'authenticated'
                        ? <Link to={`/u/${username}`}>
                            {
                                profileImg
                                    ? <img src={`/avatars/${profileImg}`} className="header__profile-img"></img>
                                    : <img src='/avatars/zeus.png' className="header__profile-img"></img>
                            }

                        </Link>

                        : <Link to='/login'><button className='btn btn-primary'>Iniciar Sesión</button></Link>

                }

            </div>
        </>
    )
}

export default HeaderHome