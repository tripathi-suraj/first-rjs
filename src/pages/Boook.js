import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

function Boook() {
  const param=useParams();
  const out=useOutletContext();
  return (
    <>
      <h1>Books {param.id} {out.title}</h1>
    </>
  )
}

export default Boook