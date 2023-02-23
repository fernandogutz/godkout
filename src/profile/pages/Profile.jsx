import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import HeaderProfile from '../../ui/components/HeaderProfile'
import UserData from '../components/UserData';

const Profile = () => {
  const [user, setUser] = useState([])

  const { username } = useParams();
  const API_USER = `https://young-falls-69772.herokuapp.com/api/users?populate=*&filters[username][$eq]=${username}`;

  useEffect(() => {
    //setloadingElements(true);
    axios.get(API_USER, {
      headers: {
        'Authorization': 'Bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8'
      }
    }).then(response => {
      setUser(response.data[0]);
      //setloadingElements(false);
      
    }).catch(error => {
      
    });
    
    
  }, [])
  



  return (
    <>
      <HeaderProfile title={username}></HeaderProfile>
      <div className="content">
        {user ? <UserData user={user}></UserData> : <p>Cargando...</p>}
        
      </div>
    </>
  )
}

export default Profile