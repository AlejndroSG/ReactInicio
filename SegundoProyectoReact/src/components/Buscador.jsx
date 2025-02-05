import React from 'react'

const Buscador = ({traer}) => {
    const buscar = (e) =>{
        traer(e.target.value);
    }
  return (
    <>
        <input type="text" placeholder='Buscador' onChange={buscar}/>
    </>
  )
}

export default Buscador