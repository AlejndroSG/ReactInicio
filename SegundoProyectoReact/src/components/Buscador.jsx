import React from 'react'

const Buscador = ({traer}) => {
    const buscar = (e) =>{
        traer(e.target.value);
    }
  return (
    <>
      
        <input type="search" className='form-control' placeholder='Filtrar por título' onChange={buscar}/>
    </>
  )
}

export default Buscador