import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Error from './Components/Error';
import ActiveJobs from './Components/ActiveJobs';
import Home2 from './Pages/Home2';
import Register from './Pages/Register';
import Edit from './Pages/Edit';
import Profile from './Pages/Profile';
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
        <Route path='/active-jobs' element={<ActiveJobs />} />
        <Route path='/home2' element={<Home2 />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;