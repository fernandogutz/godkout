import './CheckingAuthLoader.css';

const CheckingAuthLoader = () => {
  return (
    <div className="content">
      <div className="loading">
        <p>Cargando...</p>
        <div className="loading__square"></div>
      </div>
    </div>
  )
}

export default CheckingAuthLoader