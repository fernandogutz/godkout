export const verificatedMessage = (status) => {
    if (status === 'verificated') {
        return (<span id='verificationMark' className='verificatedGreen'><i className="fa-solid fa-circle-check"></i> Récord Aprobado</span>);

    } else if (status === 'not-verificated') {
        return (<span id='verificationMark' className='not-verificated'><i className="fa-solid fa-circle-check"></i> Récord no verificado</span>);

    } else if (status === 'process') {
        return (<span id='verificationMark' className='not-verificated'><i className="fa-solid fa-circle-check"></i> En proceso de verificación</span>);

    }

}