import { createContext, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header/Header'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart'
import NotFound from './pages/404'
import './scss/app.css'

export const SearchContext = createContext({})

function App() {
  const [seacrhValue, setSeacrhValue] = useState('')
  
  return (  
    <div className="wrapper">
      <SearchContext.Provider value={{ seacrhValue, setSeacrhValue }}>
        <Router>
          <Header />

          <div className="content">
            <div className="container">
              <Routes >  
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound />}/>
              </Routes>
            </div>
          </div>
        </Router>
      </ SearchContext.Provider>
    </div>
  ) 
}

export default App