import axios from 'axios';
import { useEffect, useState } from 'react';


import MarkItem from './MarkItem';
import './UserData.css';

const UserData = ({ user }) => {

    const [loadingMarks, setLoadingMarks] = useState(true)
    const [marks, setMarks] = useState([])
    const [area, setArea] = useState([])
    
    console.log(user);
    
    const onChangeArea = (event) => {
        setArea(event.target.value);
        console.log(user.username);
        console.log(event.target.value);
        const API = `https://young-falls-69772.herokuapp.com/api/marks?populate=*&filters[element][area][name][$eq]=${event.target.value}&filters[users_permissions_user][username][$eq]=${user.username}`;
        setLoadingMarks(true);
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
            }
        }).then(response => {
            setMarks(response.data.data);
            console.log(response.data.data)
            console.log(response.data.data)
            console.log(response.data.data)
            setLoadingMarks(false);
            
        }).catch(error => {
            console.log('error: ' + error);
        });
        
    }
    
    const API = `https://young-falls-69772.herokuapp.com/api/marks?populate=*&filters[element][area][name][$eq]=Reps BW&filters[users_permissions_user][username][$eq]=${user.username}`;
    useEffect(() => {
        setLoadingMarks(true);
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
            }
        }).then(response => {
            setMarks(response.data.data);
            console.log(response.data.data)
            setLoadingMarks(false);
            
        }).catch(error => {
            console.log('error: ' + error);
        });

    }, [user])
    
    return (
        <div className="user">
            <div className="user__data-profile">
                {user.profileImg ? <img src={`https://young-falls-69772.herokuapp.com/${user.profileImg}`} className="user__profile-img" alt='Perfil Atleta de Calistenia'></img>: <img src='/avatars/zeus.png' className="user__profile-img" alt='Perfil Atleta de Calistenia'></img>}
                <h2 className="user__displayName">{user.displayName}</h2>
                <p className="user__bio">{user.bio}</p>
            </div>

            <div className="user__marks">
                <select
                    id="area"
                    name='area'
                    className='select'
                    onChange={onChangeArea}
                >
                    <option value="Reps BW">Reps Peso Corporal</option>
                    <option value="Lifting">Street Lifting</option>
                    <option value="Statics">Estáticos</option>
                </select>
                

                {loadingMarks ? <p className='noMarksMessage'>Cargando...</p> : <MarkItem marks={marks}></MarkItem>}
            </div>
        </div>
    )
}

export default UserData