import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../sections/home/Home'
import AboutMe from '../sections/aboutme/AboutMe'
import AboutThis from '../sections/aboutthis/AboutThis'

const AppRouter = () => {
    return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/me' element={<AboutMe/>} />
        <Route path='/this' element={<AboutThis/>} />
        <Route path='/*' element={<Navigate to="/"/>}/>
      </Routes>
    )
}

export default AppRouter