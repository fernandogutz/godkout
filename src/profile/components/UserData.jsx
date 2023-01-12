import axios from 'axios';
import { useEffect, useState } from 'react';


import userImg from '../img/user.jpg';
import MarkItem from './MarkItem';
import './UserData.css';

const UserData = ({ user }) => {

    const [loadingMarks, setLoadingMarks] = useState(true)
    const [marks, setMarks] = useState([])
    const [area, setArea] = useState([])
    
    console.log(user);
    
    const onChangeArea = (event) => {
        setArea(event.target.value);
        const API = `http://localhost:1337/api/marks?populate=*&filters[elements][area][name][$eq]=${event.target.value}&filters[users_permissions_user][username][$eq]=${user.username}`;
        setLoadingMarks(true);
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
            }
        }).then(response => {
            setMarks(response.data.data);
            console.log(response.data)
            setLoadingMarks(false);
            
        }).catch(error => {
            console.log('error: ' + error);
        });
        
    }
    
    const API = `http://localhost:1337/api/marks?populate=*&filters[elements][area][name][$eq]=Reps BW&filters[users_permissions_user][username][$eq]=${user.username}`;
    useEffect(() => {
        setLoadingMarks(true);
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
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
                {user.profileImg ? <img src={`http://localhost:1337${user.profileImg.formats.thumbnail.url}`} className="user__profile-img" alt='Perfil Atleta de Calistenia'></img>: <img src={userImg} className="user__profile-img" alt='Perfil Atleta de Calistenia'></img>}
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
                

                {loadingMarks ? <p>Cargando...</p> : <MarkItem marks={marks}></MarkItem>}
            </div>
        </div>
    )
}

export default UserData