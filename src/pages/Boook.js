import React from 'react'
import { useParams } from 'react-router-dom'

function Boook() {
const param=useParams();
console.log(param)
  return (
    <div>Boook</div>
  )
}

export default Boook