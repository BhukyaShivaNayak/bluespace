import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Error from './Components/Error';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();


  const showHeader = location.pathname !== '/login';

  return (
    <div className='app-container'>

      {showHeader && <Header />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
