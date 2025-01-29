import Botton from "./components/Botton";
import Contacto from "./components/Contacto";
import Home from "./components/Home";

function App() {
  // let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  
  return (
    <>
      <Home></Home>
      <Contacto></Contacto>
      <Botton titulo="mostrar"></Botton>
      <Botton titulo="eliminar"></Botton>
      <Botton></Botton>
      {
        // nums.map(num =><li key={num}>{num}</li>)
      }
    </>
  )
}

export default App
