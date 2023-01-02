const toggleSettings = () => {
    const settings = document.querySelector('.settings');
    console.log(settings)
    
    if(settings.style.display == 'none') {
        settings.style.display = 'flex';

    } else {
        settings.style.display = 'none';
    }
}

export default toggleSettings