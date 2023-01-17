import React from 'react'
import { verificatedMessage } from '../../ranking/helpers/verificatedMessage';
import './MarkItem.css';

const MarkItem = ({ marks }) => {

    const toggleMark = (event) => {
        let index = event.target.attributes.index.value;
        const moreInfo = document.querySelector(`#moreInfo${index}`);

        //console.log(event.target.attributes.index.value);
        //console.log(moreInfo);

        if (moreInfo.style.cssText == 'display: block;') {
            moreInfo.style.cssText = 'display: none;';

        } else if (moreInfo.style.cssText === 'display: none;' || moreInfo.style.cssText == '') {
            moreInfo.style.cssText = 'display: block;';

        }
    }

    const listMarks = () => {
        return (
            (marks.map((mark,index) => (
                <div className='markItem' key={mark.id}>
                    <div className="markItem__card" onClick={toggleMark} index={index}>
                        <div className="markItem__group" index={index}>
                            <p index={index}>{mark.attributes.element.data.attributes.name}</p>

                        </div>

                        <div className="markItem__group" index={index}>
                            <div className="markItem__score" index={index}>
                                <span index={index}>{mark.attributes.reps}</span><span index={index} id='verificationMark' className={mark.attributes.verificated == 'verificated' ? 'verificatedGreen' : 'not-verificated'}><i index={index} className="fa-solid fa-circle-check"></i></span>
                            </div>
                            <div className='open-toggle-mark' index={index}>
                                <i index={index} className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="markItem__more-info" id={`moreInfo${index}`}>
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
            )))
        )
    }

    return (
        <div className="markItem">
            {marks[0] ? listMarks() : <p>No marks in this area</p>}

        </div>
    )
}

export default MarkItem