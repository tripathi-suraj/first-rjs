import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Booklist from './Booklist'
import Boook from './Boook'
import { BookLayout } from './BookLayout'

export function BookRoutes() {
  return (
    <>
    <Routes>
        <Route element={<BookLayout/>}>
            <Route index element={<Booklist/>} />
            <Route path=':id' element={ <Boook/>} />
        </Route>
    </Routes>
    </>
  )
}
