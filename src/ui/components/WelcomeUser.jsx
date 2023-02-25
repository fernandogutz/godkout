import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const WelcomeUser = () => {
    const { username } = useSelector(state => state.auth);

    return (
        <div className="content__section">
            <h1 className='title__page'>Hola, @{username}</h1>

            <p className="description__page">
                💪 Hoy es un excelente día para <Link className='link-primary' to='/create-mark'><i className="fa-solid fa-square-plus"></i> Agregar tus marcas</Link> y destrozar el <Link className='link-primary' to='/ranking'><i className="fa-solid fa-ranking-star"></i> Ranking</Link>.
            </p>
        </div>
    )
}

export default WelcomeUser