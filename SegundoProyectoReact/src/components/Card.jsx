import React from 'react'
import Hijo from './Hijo'

const Card = ({users, estado}) => {
//   console.log(props);
    return (
    <>
        {estado ? <h2>'Activo'</h2> : <h2>'Inactivo'</h2>}
        {/* <h2>Nombre: {users.nombre}</h2>
        <h2>Edad: {users.edad}</h2> */}
    </>
  )
}

export default Card