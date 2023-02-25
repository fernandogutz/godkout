import { Link } from 'react-router-dom'
import HeaderHome from '../ui/components/HeaderHome'

const Target = () => {
  return (
    <>

      <HeaderHome></HeaderHome>
      <div className="content">
        <div className="content__section">
          <h1 className='title__page'>Mi Progreso</h1>
          <div className="description__page">
            Faltan datos para mostrar el gráfico de tu progreso.
          </div>
          <div className="description__page">
            Agrega más marcas en " <Link to='/create-mark'><i className="fa-solid fa-square-plus"></i></Link> " para habilitar esta sección.
          </div>
        </div>
        <div className="content__section">
          <h2 className='subtitle__page'>Mis Objetivos</h2>
          <div className="description__page">
            Agrega más marcas en " <Link to='/create-mark'><i className="fa-solid fa-square-plus"></i></Link> " para habilitar esta sección.
          </div>
        </div>
      </div>
    </>

  )
}

export default Target