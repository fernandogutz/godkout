import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useCheckout } from './hooks/useCheckout';
import './index.css';
import AppRouter from './router/AppRouter';
import AuthRouter from './router/AuthRouter';
import CheckingAuthLoader from './ui/components/CheckingAuthLoader';


function App() {

  useCheckout(); 
  const { status } = useSelector(state => state.auth);


  if(status === 'checking') {
    return (
      <div className="main">
        <CheckingAuthLoader></CheckingAuthLoader>
  
      </div>
    );

  } 

  return (
    <div className="main">

      <Routes>

        {
          (status === 'authenticated')
            ? <Route path='/*' element={<AppRouter></AppRouter>}></Route>
            : <Route path='/*' element={<AuthRouter></AuthRouter>}></Route>
        }
        

      </Routes>

    </div>
  );

 

}

export default App;
