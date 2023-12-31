import Login from '../Auth/Login'
import Home from '../Components/Home/Home'
import Navbar from '../Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Login />} />
        <Route path='/my-app/src/Components/Home/Home.jsx' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
