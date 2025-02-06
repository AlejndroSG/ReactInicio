import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Hijo from './components/Hijo'
import Posts from './components/Posts'
import { Route, Routes } from 'react-router-dom'
import Home from './pag/Home'
import Contactos from './pag/Contactos'
import Soporte from './pag/Soporte'
import Navbar from './components/Navbar'
import Error404 from './pag/Error404'

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
      {/* <Posts></Posts> */}

      {/* <Card users={users} estado={estado}></Card>
      <button onClick={cambiar}>{estado ? "Desactivar" : "Activar"}</button>

      <h2>Hola usuario: {nombre}</h2>
      <Hijo dameLogin={login}></Hijo> */}
    
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Contactos' element={<Contactos></Contactos>}></Route>
          <Route path='/Soporte' element={<Soporte></Soporte>}></Route>
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
    </>
  )
}

export default App
