import Contacto from "./coponents/Contacto"
import Home from "./coponents/Home"


function App(){
  const saludo = <h3>Hola que tal</h3>
  const datos = {
    nombre: "Ricardo",
    apellido: "Pereyra",
    edad: 33
  }
  return(
    <>
      
      {saludo}
      {[1,2,3,4]}
      {datos.nombre}
      <Home></Home>
      <Contacto></Contacto>
    </>
  )
}

export default App