import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import './App.css'
import ActivitiesPage from './pages/ActivitiesPage'
import ActivityDetail from './pages/ActivityDetail'
function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='activities' element={<ActivitiesPage/>}/>
        <Route path='activities/:id' element={<ActivityDetail/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
