import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './../pages/NotFound/NotFound'
import Login from './../pages/Login/Login'
import Register from './../pages/Register/Register'
import Home from './../pages/Home/Home'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Login />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp