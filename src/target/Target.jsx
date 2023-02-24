import { Link } from 'react-router-dom'
import HeaderHome from '../ui/components/HeaderHome'

const Target = () => {
  return (
    <>
    
      <HeaderHome></HeaderHome>
      <div className="content">
        <h1 className='title__page'>Mis Objetivos</h1>
        <div className="description__page">
          Agrega más marcas en " <Link to='/create-mark'><i className="fa-solid fa-square-plus"></i></Link> " para habilitar esta sección!
        </div>
      </div>
    </>

  )
}

export default Target