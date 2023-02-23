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
        console.log(user.username);
        console.log(event.target.value);
        const API = `https://young-falls-69772.herokuapp.com/api/marks?populate=*&filters[element][area][name][$eq]=${event.target.value}&filters[users_permissions_user][username][$eq]=${user.username}`;
        setLoadingMarks(true);
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8'
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
                'Authorization': 'Bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8'
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
                {user.profileImg ? <img src={`https://young-falls-69772.herokuapp.com${user.profileImg.formats.thumbnail.url}`} className="user__profile-img" alt='Perfil Atleta de Calistenia'></img>: <img src={userImg} className="user__profile-img" alt='Perfil Atleta de Calistenia'></img>}
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