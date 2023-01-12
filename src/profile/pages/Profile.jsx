import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import HeaderProfile from '../../ui/components/HeaderProfile'
import UserData from '../components/UserData';

const Profile = () => {
  const [user, setUser] = useState([])

  const { username } = useParams();
  const API_USER = `http://localhost:1337/api/users?populate=*&filters[username][$eq]=${username}`;

  useEffect(() => {
    //setloadingElements(true);
    axios.get(API_USER, {
      headers: {
        'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
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