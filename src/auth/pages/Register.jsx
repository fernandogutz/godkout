import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { registerUser } from "../../store/auth/thunks";
import { showPassword } from "../helpers/showPassword";

import './Register.css'

const Register = () => {

  const {errorMessageRegisterFrontend} = useSelector(state => state.auth);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

  // Revisar si hay errores del backend, naturalmente, no habrá errores de back y front al mismo tiempo, ya que se hace la petición solo cuando ya se ha validado la data en el front
  useEffect(() => {
    
    if(errorMessageRegisterFrontend) {
      setErrors([errorMessageRegisterFrontend]);
    } 

  }, [errorMessageRegisterFrontend])

  // Get form user data (dynamic)
  const { email, username, password, onInputChange } = useForm({
    email: '',
    username: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`email: ${email} \nusername: ${username} \npassword: ${password}`);

    if(dataValidate()) {
      //console.log('Front Validado')

      // Persistir el error que trajo el use Effect arriba, ese error es el que guardamos en el Store y que se origina en el backend
      if(errorMessageRegisterFrontend) {
        setErrors([errorMessageRegisterFrontend]);
      } 

      //registerUser
      dispatch(registerUser(email, username, password, getAds));
    }
  }

  const dataValidate = () => {

    setErrors([]);
    
    if (email === '') {
      setErrors(['Email es obligatorio '])
      return;
    }

    if (username === '') {
      setErrors(['Username es obligatorio '])
      return;

    }

    if (password === '') {
      setErrors(['Password es obligatorio '])
      return;

    }

    return true;

  }

  const displayErrors = () => {

    if (errors.length >= 1) {
      return (
        <div className="card__errors">
          {errors.map((error) => (
            <p className="card__error-item" key={error}>{error}</p>
          ))}
        </div>
      );

    } else {
      return null;
    }
    
  }


  // Get Checkbox Value (getAds)
  const [getAds, setGetAds] = useState(true);
  const onGetAdsChange = (event) => {
    const checkBoxState = event.target.checked;
    setGetAds(checkBoxState);
  }
  //console.log(getAds); // Recordar que el componente de renderiza cada vez que hay un cambio en el estado, esto se imprimirá consecuentemente

  const { status } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);



  return (
    <div className="content">
      <h1 className="title__page">
        Crear cuenta
      </h1>

      <div className="card">

        {displayErrors()}

        <form className="card__form" onSubmit={onSubmit}>
          <label className="card__label" htmlFor="email">Email</label>
          <input
            className="card__input"
            type="email"
            name="email"
            id="email"
            placeholder="correo@gmail.com"
            value={email}
            onChange={onInputChange}
          />

          <label className="card__label" htmlFor="email">Username</label>
          <input
            className="card__input"
            type="text"
            name="username"
            id="username"
            placeholder="fernandogutz"
            value={username}
            onChange={onInputChange}
          />

          <label className="card__label" htmlFor="password">Contraseña</label>
          <div className="wrapper-input">
            <span className='eyeBtn'  onClick={showPassword}><i class="fa-solid fa-eye"></i></span>
            <input
              className="card__input"
              type="password"
              name="password"
              id="password"
              placeholder="***********"
              value={password}
              onChange={onInputChange}
            />
          </div>
          

          <div className="card__checkbox-container">
            <input 
              type='checkbox' 
              id="getAds" 
              name="getAds" 
              value="getAds"
              defaultChecked
              onChange={(event) => onGetAdsChange(event)}
            />
            <label className="card__label" htmlFor="getAds">Acepto recibir noticias y promociones al correo</label>
          </div>
          
          <input
            disabled={isAuthenticating}
            type="submit"
            value="Crear Cuenta"
            className="btn btn-primary btn-form"
          />
        </form>
        <p className='card__form-bottom-msg'>¿Ya tienes una cuenta? <Link to='/login' className='link-primary'>Iniciar Sesión</Link> </p>
      </div>
    </div>
  )
}

export default Register