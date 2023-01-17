import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ferImg from '../../profile/img/fer.jpg';
import { verificatedMessage } from '../helpers/verificatedMessage';
import './ListAthletes.css';

const ListAthletes = ({ marks }) => {
  
  const toggleMark = (event) => {
    let index = event.target.attributes.index.value;
    const moreInfo = document.querySelector(`#moreInfo${index}`);
    //console.log(moreInfo.style)

    //console.log(event.target.attributes.index.value);
    //console.log(moreInfo);
    
    if (moreInfo.style.cssText == 'display: block;') {
      moreInfo.style.cssText = 'display: none;';

    } else if (moreInfo.style.cssText === 'display: none;' || moreInfo.style.cssText == '') {
      moreInfo.style.cssText = 'display: block;';

    }
  }

  const setRanking = () => {

    return (
      marks.map((mark, index) => (
        <div
          key={mark.id}
          className="rankingItem"
        >
          <div className="rankingItem__card"  index={index} onClick={toggleMark}>
            <div className="rankingItem__group" index={index}>
              <div className={`rankingItem__place place${index +1}`} index={index}>
                {index + 1}
              </div>

              <Link to={`/u/${mark.attributes.users_permissions_user.data.attributes.username}`} className="rankingItem__username" index={index}>
                @{mark.attributes.users_permissions_user.data.attributes.username}
              </Link>
            </div>

            <div className="rankingItem__group" index={index}>
              <div className="rankingItem__score" index={index}>
                <span index={index}>{mark.attributes.reps}</span><span index={index} id='verificationMark'  className={mark.attributes.verificated == 'verificated' ? 'verificatedGreen' : 'not-verificated'  }><i index={index} className="fa-solid fa-circle-check"></i></span>
              </div>
              <div className='open-toggle-mark' id={`open-toggle-mark${index}`} index={index} >
                <i index={index} className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
          
          <div className="rankingItem__more-info" id={`moreInfo${index}`}>
            <p> {verificatedMessage(mark.attributes.verificated)} </p>
            <p>{mark.attributes.dateCreatedMark} (Y-m-d)</p>
            <br />
            <p>Registro: </p>
            {mark.attributes.video 
              ? <iframe width="100%" height="240px" src={`https://www.youtube.com/embed/${mark.attributes.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              : <p>No hay video disponible</p>
            }
            
          </div>

        </div>

      ))
    )
  }

  return (
    <>
      {marks[0] ? setRanking() : <p>No hay marcas que coincidan con tu búsqueda, prueba con otro Elemento.</p>}
    </>
  )
}

export default ListAthletes

