
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequiredAuth from './Pages/Login/RequiredAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';

import RequiredAdmin from './Pages/Login/RequiredAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';

import Services1 from './Pages/Services1/Services1';
import DoctorSignUp from './Pages/Login/DoctorSignUp';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className='max-w-7xl px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='appoinment' element={
          <RequiredAuth>
            <Appoinment></Appoinment>
          </RequiredAuth>
        }></Route>
        <Route path='services' element={<Services1></Services1>}></Route>
        <Route path='dashboard' element={
          <RequiredAuth>
            <Dashboard></Dashboard>
          </RequiredAuth>
        }>
          <Route index element={<MyAppoinments></MyAppoinments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequiredAdmin><Users></Users></RequiredAdmin>}></Route>
          <Route path='addDoctor' element={<RequiredAdmin><AddDoctor></AddDoctor></RequiredAdmin>}></Route>
          <Route path='manageDoctor' element={<RequiredAdmin><ManageDoctor></ManageDoctor></RequiredAdmin>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='doctorSignUp' element={<DoctorSignUp></DoctorSignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
