import React from 'react'
import {
  Route, Routes,Link
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Boook from './pages/Boook';
import Notfound from './pages/Notfound';
import Booklist from './pages/Booklist';
import { BookLayout } from './pages/BookLayout';



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
        <Route path='/books' element={<BookLayout/>}>
          <Route index element={ <Booklist/>} />
          <Route path=':id' element={ <Boook/>} />
        </Route>
        <Route path='*' element={ <Notfound/>} />
      </Routes>
    </>
  )
}

export default Layout;
