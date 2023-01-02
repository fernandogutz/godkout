import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { checkingAuthentication } from "../../store/auth/thunks.js";


const Login = () => {

  const {status, errorMessageFrontend} = useSelector(state => state.auth); // Acceder a un valor del Store, del authSlice específicamente
  const [errors, setErrors] = useState([]);

  const { identifier, password, onInputChange } = useForm({
    identifier: '',
    password: ''
  })
  
  const isAuthenticating = useMemo(() => status === 'checking', [status]);
  
  
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( checkingAuthentication(identifier, password) );



  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
  }

  // Revisar si hay errores del backend, naturalmente, no habrá errores de back y front al mismo tiempo, ya que se hace la petición solo cuando ya se ha validado la data en el front
  useEffect(() => {
      
    if(errorMessageFrontend) {
      setErrors([errorMessageFrontend]);
    } 

  }, [errorMessageFrontend])
  


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

  return (
    <div className="content">
      <h1 className="title__page">
        Iniciar Sesión
      </h1>

      <div className="card">

        {displayErrors()}

        <form className="card__form" onSubmit={onSubmit}>
          <label className="card__label" htmlFor="email">Email o Username</label>
          <input
            className="card__input"
            type="text"
            name="identifier"
            id="identifier"
            placeholder="correo@gmail.com o fernandogutz"
            value={identifier}
            onChange={onInputChange}
          />

          <label className="card__label" htmlFor="password">Contraseña</label>
          <input
            className="card__input"
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            value={password}
            onChange={onInputChange}
          />

          <input 
            disabled={isAuthenticating}
            type="submit" 
            value="Iniciar Sesión" 
            className="btn btn-primary btn-form" 
          />
          
          {/* Google Sign In 
          <input 
            disabled={isAuthenticating}
            type="submit" 
            value="Google Sign In" 
            className="btn btn-secondary 
            btn-form" 
            onClick={ onGoogleSignIn} 
          />
          */}
        </form>
        <p className='card__form-bottom-msg'>¿No tienes una cuenta? <Link to='/sign-up' className='link-primary'>Registrarme</Link> </p>
      </div>
    </div>
  )
}

export default Login