import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { createMark, getElementsByArea } from '../../store/mark/thunks';
import { setScoreInput } from '../helpers/setScoreInput';
import './AddNewMark.css';


const AddNewMark = () => {
  const dispatch = useDispatch();



  // Setear una primera consulta a Pull Ups BW Masculino (male, Reps BW, Pull Ups)
  const initialForm = {
    selectGender: 'male',
    selectArea: 'Reps BW',
    selectElement: 1,
    videoLink: '', // para evadir el warnig en consola (undefined to defined value)
    dateCreated: '',
    reps: ''
  }

  const { elements, activeElement, successMsg } = useSelector(state => state.mark);

  useEffect(() => {
    if (initialForm.selectArea === 'Reps BW' && selectElement === 1) {
      dispatch(getElementsByArea(initialForm.selectArea));

    }

  }, [])


  // Get form user data (dynamic)
  const { selectArea, selectElement, videoLink, reps, dateCreated, onInputChange } = useForm(initialForm);


  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(selectArea);
    console.log(selectElement);
    console.log(reps);
    console.log(videoLink);
    console.log(dateCreated);
    console.log(localStorage.getItem('jwt'));


    const response = await dispatch(createMark(reps, selectElement, localStorage.getItem('id'), dateCreated, videoLink, localStorage.getItem('jwt')));
    console.log(response);


  }

  const updateElementsByArea = (event) => {
    dispatch(getElementsByArea(event.target.value));
    setScoreInput(event.target.value);

  }

  return (
    <>
      <div className="card" id='filtersAddNewMarkContainer'>
        {
          successMsg ?
            <div className="card__successMsg">
              {successMsg}
            </div>

            : null
        }

        <form className="card__form" onSubmit={onSubmit}>
          <label className='card__label' htmlFor="selectArea">Área</label>
          <select
            id="selectArea"
            name='selectArea'
            className='card__select'
            onChange={onInputChange}
            onChangeCapture={updateElementsByArea}
          >
            <option value="Reps BW">Reps Peso Corporal</option>
            <option value="Lifting">Street Lifting</option>
            <option value="Statics">Estáticos</option>
          </select>

          <label className='card__label' htmlFor="selectArea">Elemento</label>
          <select
            id="selectElement"
            name='selectElement'
            className='card__select'
            onChange={onInputChange}
            defaultValue={activeElement}
          >
            {elements.map(element => (
              <option key={element.attributes.name} value={element.id} element={element.id}>{element.attributes.name}</option>
            ))}
          </select>

          <label className='card__label' id='repsLabel' htmlFor="reps">Reps</label>
          <input
            className="card__input"
            required
            min={0}
            type="number"
            name="reps"
            id="reps"
            placeholder="34"
            value={reps}
            onChange={onInputChange}
          />

          <label className='card__label' htmlFor="videoLink">Video (idealmente link YouTube)</label>
          <input
            className="card__input"
            required
            type="text"
            name="videoLink"
            id="videoLink"
            placeholder="https://www.youtube.com/watch?v=BXiSxFivsxM"
            value={videoLink}
            onChange={onInputChange}
          />

          <label className='card__label' htmlFor="dateCreated">Fecha</label>
          <input
            className="card__input"
            required
            type="date"
            name="dateCreated"
            id="dateCreated"
            placeholder="https://www.youtube.com/watch?v=BXiSxFivsxM"
            value={dateCreated}
            onChange={onInputChange}
          />

          <input
            type="submit"
            value="Crear Marca"
            className="btn btn-primary btn-form"
          />
        </form>

      </div>
    </>

  )
}

export default AddNewMark