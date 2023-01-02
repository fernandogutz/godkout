import './FiltersRanking.css';

const FiltersRanking = () => {
  return (
    <div className="card" id='filtersContainer'>
        <div className="card__form">
            <label className='card__label' htmlFor="selectArea">Categoría</label>
            <select id="selectGender" className='card__select'>
                <option>Masculina</option>
                <option>Femenina</option>
            </select>

            <label className='card__label' htmlFor="selectArea">Área</label>
            <select id="selectArea" className='card__select'>
                <option value="rep">Reps Peso Corporal</option>
                <option value="lifting">Street Lifting</option>
                <option value="static">Estáticos</option>
            </select>

            <label className='card__label' htmlFor="selectArea">Elemento</label>
            <select id="selectElement" className='card__select'>
                <option>Pull Ups</option>
                <option>Push Ups</option>
                <option>Dips</option>
                <option>Pistol Squat</option>
            </select>
        </div>

    </div>
  )
}

export default FiltersRanking