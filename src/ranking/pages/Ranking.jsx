import HeaderHome from '../../ui/components/HeaderHome'
import FiltersRanking from '../components/FiltersRanking'
import ListAthletes from '../components/ListAthletes'

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
        <div className="header subHeader">
          <h1>Ranking</h1>
          <button className='btn btn-actions' onClick={toggleFilters}><i className="fas fa-regular fa-filter"></i> <span id='textBtnFiltrar'>Filtrar</span></button>
        </div>

        <FiltersRanking></FiltersRanking>
        <ListAthletes></ListAthletes>
      </div>
    </>
  )
}

export default Ranking