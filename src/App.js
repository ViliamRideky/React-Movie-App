import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllMovies from './pages/AllMovies'
import Home from './pages/Home'
import OneMovie from './pages/OneMovie'
import Form from './pages/Form'
import SharedLayout from './pages/SharedLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="all-movies" element={<AllMovies />} />
          <Route path="form" element={<Form />} />
          <Route path="one-movie/:movieId" element={<OneMovie />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App