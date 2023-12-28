import React from 'react'
import {
  Route, Routes,Link
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import { BookRoutes } from './pages/BookRoutes';



function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/books/*' element={<BookRoutes/>}/>
        <Route path='*' element={ <Notfound/>} />
      </Routes>
    </>
  )
}

export default Layout;
