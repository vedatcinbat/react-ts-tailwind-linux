import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import Todo from './pages/Todo'

const App: React.FC = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/todo" element={<Todo />} />   
      </Routes>
    </Router>
  )
}

export default App
