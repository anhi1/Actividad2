import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import './App.css'
import ActivitiesPage from './pages/ActivitiesPage'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='activities' element={<ActivitiesPage/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
