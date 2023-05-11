import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import { Error, Home } from './pages'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" transition={Zoom} draggablePercent={60} />
    </>
  )
}
export default App
