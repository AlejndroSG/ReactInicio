import React from 'react'

const Hijo = ({dameLogin}) => {
    const nombre = "Andres";
  return (
    <>
        {/* {estado ? nombre="Andrés" : nombre=""}; */}
        <button onClick={() => dameLogin(nombre)}>Login</button>
    </>
  )
}

export default Hijo