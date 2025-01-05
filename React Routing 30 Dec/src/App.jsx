import React from 'react'
import Nav from './pages/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Frontend from './pages/Frontend'
import Backend from './pages/Backend'
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/courses' element={<Courses />}>
          <Route path='frontend' element={<Frontend />}></Route>
          <Route path='backend' element={<Backend />}></Route>
        </Route>
        <Route path='/kodr' element={<Kodr />}></Route>
      </Routes> 
    </div>
  )
}

export default App