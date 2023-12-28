import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export function BookLayout() {
  return (
    <>
        <ul>
            <li>
            <Link to="/books">Book List</Link>
            </li>
            <li>
            <Link to="/books/2">Book 1</Link>
            </li>
            <li>
            <Link to="/books/3">Book 2</Link>
            </li>
        </ul>
        <Outlet/>
    </>
  )
}
