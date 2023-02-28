import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { getElementsByAreaAndGender, getMarksByElements } from '../../store/ranking/thunks';
import useGetMarks from '../hooks/useGetMarks';
import './FiltersRanking.css';
import ListAthletes from './ListAthletes';





// TODO: Es importantísimo limpiar este componente, separando la lógica y reutilizando las peticiones en un custom hook.





const FiltersRanking = () => {
    const dispatch = useDispatch();

    // Setear una primera consulta a Pull Ups BW Masculino (male, Reps BW, Pull Ups)
    const initialForm = {
        selectGender: 'male',
        selectArea: 'Reps BW',
        selectElement: 'Pull Ups'
    }
    
    const { elements, activeElement, disabledFilterBtn, latestQueryElement, marks, suffix } = useSelector(state => state.ranking);

    useEffect(() => {
        dispatch(getElementsByAreaAndGender(selectArea));
        dispatch(getMarksByElements(activeElement, selectGender));
    
    }, [])


    const [loadingElements, setloadingElements] = useState(false);

    // Get form user data (dynamic)
    const { selectGender, selectArea, selectElement, onInputChange } = useForm(initialForm);

    // Setear el valor de selectElement cada vez que activeElement cambia en el store (lo hago cambiar cada vez que se ejecuta un cambio en area o gender)
    useEffect(() => {
        console.log(`selectElement1: ${selectElement}`);
        console.log(`activeElement: ${activeElement}`);

        onInputChange({target:{name: 'selectElement', value: activeElement}});

        console.log(`selectElement2: ${selectElement}`);

    }, [activeElement])
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(' ');
        console.log(`Gender: ${selectGender}`);
        console.log(`Area: ${selectArea}`);
        console.log(`Element: ${selectElement}`);
        dispatch( getMarksByElements(selectElement, selectGender, selectArea) );
        
    }

    const updateElementsByArea = (event) => {
        dispatch(getElementsByAreaAndGender(event.target.value));

    }

    console.log(`End: ${activeElement}`);

    return (
        <>
            <div className="card" id='filtersContainer'>
                <form className="card__form" onSubmit={onSubmit}>
                    <label className='card__label' htmlFor="selectArea">Categoría</label>
                    <select
                        id="selectGender"
                        name='selectGender'
                        className='card__select'
                        onChange={onInputChange}
                    >
                        <option value="male">Masculina</option>
                        <option value="female">Femenina</option>
                    </select>

                    <label className='card__label' htmlFor="selectArea">Área</label>
                    <select
                        id="selectArea"
                        name='selectArea'
                        className='card__select'
                        onChange={onInputChange}
                        onChangeCapture={updateElementsByArea}
                    >
                        <option value="Reps BW">Max Reps</option>
                        <option value="Lifting">Lifting (1RM)</option>
                        <option value="Statics">Estáticos</option>
                    </select>

                    <label className='card__label' htmlFor="selectArea">Elemento</label>
                    <select
                        disabled={loadingElements}
                        id="selectElement"
                        name='selectElement'
                        className='card__select'
                        onChange={onInputChange}
                        defaultValue={activeElement}
                    >   
                        {elements.map(element => (
                            <option key={element.attributes.name} value={element.attributes.name}>{element.attributes.name}</option>
                        ))}
                    </select>

                    <input
                        disabled={disabledFilterBtn}
                        type="submit"
                        value="Aplicar Filtros"
                        className="btn btn-primary btn-form"
                    />
                </form>

            </div>

            <div className="marksRankingContainer">
                <h2 className='elementTitle'>
                    <span>{latestQueryElement}</span> 
                    <span className='elementTitle__suffix'>{suffix}</span>
                </h2>

                {marks ? <ListAthletes marks={marks} area={selectArea} element={selectElement}/> : <p className='noMarksMessage'>Cargando...</p>}
                
            </div>
        </>

    )
}

export default FiltersRanking