import { Link } from 'react-router-dom';
import HeaderHome from '../../ui/components/HeaderHome'
import ProTip from '../../ui/components/ProTip';
import FiltersRanking from '../components/FiltersRanking'
import './Ranking.css';

const toggleFilters = () => {
  const filtersContainer = document.querySelector('#filtersContainer');
  const textBtnFiltrar = document.querySelector('#textBtnFiltrar');

  if (filtersContainer.style.display === 'flex') {
    filtersContainer.style.display = 'none';
    textBtnFiltrar.innerHTML = 'Filtrar'

  } else {
    filtersContainer.style.display = 'flex';
    textBtnFiltrar.innerHTML = 'Ocultar'

  }
}

const Ranking = () => {
  return (
    <>
      <HeaderHome />
      <div className="content">
        <ProTip><Link to='/create-mark'>Crea una marca en " <i className="fa-solid fa-square-plus"></i></Link> " para entrar al Ranking.</ProTip>
        <div className="header subHeader">
          <h1 className='title__ranking'>Ranking</h1>
          <button className='btn btn-actions' onClick={toggleFilters}><i className="fas fa-regular fa-filter"></i> <span id='textBtnFiltrar'>Filtrar</span></button>
        </div>

        <FiltersRanking></FiltersRanking>
      </div>
    </>
  )
}

export default Ranking