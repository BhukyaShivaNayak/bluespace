import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import LoginFailure from './Components/LoginFailure'
import Error from './Components/Error';
import ActiveJobs from './Components/ActiveJobs';
import ClosedJobs from './Components/ClosedJobs';
import Pipeline from './Components/Pipeline';

import JobDescription from './Components/JobDescription'
import Home2 from './Pages/Home2';
import Register from './Pages/Register';
import Register1 from './Pages/Register1'

import Edit from './Pages/Edit';
import Profile from './Pages/Profile';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();


  const showHeader = location.pathname !== '/login' && location.pathname !== '/login-failure';


  return (
    <div className='app-container'>

      {showHeader && <Header />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/login-failure' element={<LoginFailure />} />
        <Route path='/' element={<Home />} />
        <Route path='/active-jobs' element={<ActiveJobs />} />
        <Route path='/closed-jobs' element={<ClosedJobs />} />
        <Route path='/job-description' element={<JobDescription />} />
        <Route path='/pipeline' element={<Pipeline />} />

        <Route path='/home2' element={<Home2 />} />
        <Route path='/register' element={<Register />} />
        <Route path="/register1" element={<Register1 />} />

        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;