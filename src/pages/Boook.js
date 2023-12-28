import React from 'react'
import { useParams } from 'react-router-dom'

function Boook() {
  const param=useParams();
  return (
    <>
      <h1>Books {param.id}</h1>
    </>
  )
}

export default Boook