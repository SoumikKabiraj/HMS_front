import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import Profile from './pages/doctor/Profile';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/Appointments';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import ProfileUser from './pages/ProfileUser';
import MedicenePosting from './pages/admin/MedicenePosting';
import Medicene from './pages/Medicene';
import MediceneBuyingPage from './pages/MediceneBuyingPage';
import Orders from './pages/Orders';
import Allorders from './pages/admin/Allorders';
import Dash from './pages/Dash';
import Postpescription from './pages/doctor/Postpescription';
import Pescription from './pages/doctor/Pescription';
import UserPescription from './pages/UserPescription';


function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading?
          (<Spinner />):
          (<Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Dash />
              </ProtectedRoute>
            } />
            <Route path='/home' element={
              <ProtectedRoute>
                <HomePage/>
              </ProtectedRoute>
            } />
            <Route path='/apply-doctor' element={
              <ProtectedRoute>
                <ApplyDoctor />
              </ProtectedRoute>
            } />
            <Route path='/notification' element={
              <ProtectedRoute>
                <NotificationPage/>
              </ProtectedRoute>
            } />
            <Route path='/admin/users' element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            } />
            <Route path='/admin/doctors' element={
              <ProtectedRoute>
                <Doctors />
              </ProtectedRoute>
            } />
            <Route path='/doctor/profile/:id' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path='/doctor/book-appointment/:id' element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            } />
            <Route path='/appointments' element={
              <ProtectedRoute>
                <Appointments/>
              </ProtectedRoute>
            } />
            <Route path='/doctor-appointments' element={
              <ProtectedRoute>
                <DoctorAppointments/>
              </ProtectedRoute>
            } />
            <Route path='/profile' element={
              <ProtectedRoute>
                <ProfileUser/>
              </ProtectedRoute>
            } />
            <Route path='/admin/medicene-posting' element={
              <ProtectedRoute>
                <MedicenePosting/>
              </ProtectedRoute>
            } />
            <Route path='/doctor/book-appointment/:id' element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            } />
            <Route path='/medicene' element={
              <ProtectedRoute>
                <Medicene />
              </ProtectedRoute>
            } />
            <Route path='/orders' element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />
            <Route path='/meds/buy_meds/:id' element={
              <ProtectedRoute>
                <MediceneBuyingPage />
              </ProtectedRoute>
            } />
            <Route path='/allorders' element={
              <ProtectedRoute>
                <Allorders />
              </ProtectedRoute>
            } />
            <Route path='/postpescription' element={
              <ProtectedRoute>
                <Postpescription/>
              </ProtectedRoute>
            } />
            <Route path='/doctor/postpescription/pescription/:id' element={
              <ProtectedRoute>
                <Pescription />
              </ProtectedRoute>
            } />
            <Route path='/pescriptions' element={
              <ProtectedRoute>
                <UserPescription/>
              </ProtectedRoute>
            } />
            <Route path='/login' element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path='/register' element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } />
          </Routes>)
        }
      </BrowserRouter>
    </>
  );
}

export default App;
