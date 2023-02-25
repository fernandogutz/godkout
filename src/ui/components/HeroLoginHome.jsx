import { Link } from "react-router-dom"

const HeroLoginHome = () => {
    return (
        <div className="content__section">
            <h1 className="title__page">
                ¡Una nueva forma de competir! 🚀
            </h1>
            <p className="description__page">
                Regístrate ahora en GODKOUT, la nueva plataforma para competir en Street Workout y subir escalones en el Ranking Internacional.
            </p>
            <p className="description__page">
                ¡Únete gratis hoy mismo!
            </p>

            <div className="authButtons">
                <Link to='/login'><button className="btn btn-primary">Iniciar Sesión</button></Link>
                <Link to='/sign-up'><button className="btn btn-secondary">Registrarme</button></Link>
            </div>
        </div>
    )
}

export default HeroLoginHome