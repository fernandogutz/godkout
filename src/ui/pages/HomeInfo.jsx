import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import AppMenu from '../components/AppMenu'
import HeaderHome from '../components/HeaderHome'
import HeroLoginHome from '../components/HeroLoginHome';
import WelcomeUser from '../components/WelcomeUser';
import './HomeInfo.css';

const HomeInfo = () => {
    const { status } = useSelector(state => state.auth);
    console.log(status);

    return (
        <>
            <HeaderHome></HeaderHome>
            <div className="content">

                {
                    status === 'not-authenticated'
                        ? <HeroLoginHome></HeroLoginHome>
                        : <WelcomeUser></WelcomeUser>

                }
                

                {/* GUÍA */}
                <div className="content__section">
                    <h2 className="subtitle__page">
                        Guía
                    </h2>

                    <p className="description__page">
                        En " <Link to='/ranking'><i className="fa-solid fa-ranking-star"></i></Link> " puedes ver el Ranking y filtrar por tu categoría favorita.
                    </p>

                    <p className="description__page">
                        En " <Link to='/create-mark'><i className="fa-solid fa-square-plus"></i></Link> " puedes crear tus marcas para entrar al Ranking.
                    </p>

                    <p className="description__page">
                        En " <Link to='/search'><i className="fa-solid fa-magnifying-glass"></i></Link> " puedes buscar Atletas, Clubes y Competiciones.
                    </p>

                    <p className="description__page">
                        En " <Link to='/target'><i className="fa-solid fa-chart-line"></i></Link> " puedes ver tu progreso y establecer objetivos.
                    </p>
                </div>

                {/* Soporte */}
                <div className="content__section">
                    <h2 className="subtitle__page">
                        Soporte y colaboración
                    </h2>
                    <p className="description__page">
                        ¿Necesitas ayuda con la plataforma o te gustaría colaborar y compartir tus ideas?
                    </p>

                    <p className="description__page">
                        Contáctame por Instagram <a className='link-primary' href="https://instagram.com/fernandogutzz" target='_blank'>@fernandogutzz</a>, visita mi sitio web <a className='link-primary' href="https://fernandogutz.com/ target='_blank'">fernandogutz.com</a> o envíame un correo a <a className='link-primary' href="mailto:hello@fernandogutz.com" target='_blank'>hello@fernandogutz.com</a>.
                    </p>
                </div>

                {/* Vinculación */}
                <div className="content__section">
                    <h2 className="subtitle__page">
                        Vinculación
                    </h2>

                    <p className="description__page">
                        ¿Representas a una Organización y deseas vincularte? Contáctame en mi sitio web <a className='link-primary' href="https://fernandogutz.com/" target='_blank'>fernandogutz.com</a> o envíame un correo a <a className='link-primary' href="mailto:hello@fernandogutz.com" target='_blank'>hello@fernandogutz.com</a>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomeInfo