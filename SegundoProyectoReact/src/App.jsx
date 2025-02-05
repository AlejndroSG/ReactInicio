import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Hijo from './components/Hijo'
import Posts from './components/Posts'

function App() {
  
  // const [estado, setEstado] = useState(false);

  // const users = {
  //   nombre:"redu",
  //   edad:50
  // }

  // function cambiar(){
  //   setEstado(!estado);
  // }

  // const [nombre, setNombre] = useState("");

  // let login = (nombre) =>{
  //   setNombre(nombre);
  // }



  return (
    <>
      <Posts></Posts>

      {/* <Card users={users} estado={estado}></Card>
      <button onClick={cambiar}>{estado ? "Desactivar" : "Activar"}</button>

      <h2>Hola usuario: {nombre}</h2>
      <Hijo dameLogin={login}></Hijo> */}
    </>
  )
}

export default App
