import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
