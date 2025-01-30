// import Botton from "./components/Botton";
import { useState } from "react";
import Card from "./components/Card";
import Hijo from "./components/Hijo";
// import Contacto from "./components/Contacto";
// import Home from "./components/Home";

function App() {
  // let datos = [
  //   {
  //     id: 0,
  //     titulo: "Toni de la rosa",
  //     img: "https://randomuser.me/api/portraits/men/75.jpg",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto?"
  //   },
  //   {
  //     id: 1,
  //     titulo: "Rosa de Toni",
  //     img: "https://randomuser.me/api/portraits/men/54.jpg",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam aliquid quisquam accusamus veritatis doloribus eligendi beatae quos tempore magnam."
  //   },
  //   {
  //     id: 2,
  //     titulo: "Rosa y Toni",
  //     img: "https://randomuser.me/api/portraits/men/25.jpg",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam aliquid quisquam accusamus veritatis doloribus eligendi beatae quos tempore magnam."
  //   }
  // ]

  // Varaibles Reactivas
  let [contador,setContador] = useState(0);
  let [color,setColor] = useState("none");
  let [modo,setModo] = useState("white");
  let [textmodo, setTextmodo] = useState("Modo claro")
  
  function randNum(){
    setColor("rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")");
    console.log(color);
  }

  function cambiar(signo){
    if(signo == "+"){
      setContador(contador + 1);
    }
    if(signo == "-"){
      setContador(contador - 1);
    }
  }

  function dec(){
    setContador(contador - 1); 
  }

  function modoOsClar(){
    if(modo == "white"){
      setModo("black");
    }else{
      setModo("white");
    }

    if(textmodo == "Modo claro"){
      setTextmodo("Modo oscuro");
    }else{
      setTextmodo("Modo claro");
    }
  }

  return (
    <>
      {/* <Home></Home>
      <Contacto></Contacto>
      <Botton titulo="Mostrar"></Botton>
      <Botton titulo="Eliminar"></Botton>
      <Botton></Botton> */}
      
      {/* {datos.map((dato) =>{
        return <Card key={dato.id} titulo={dato.titulo} img={dato.img} content={dato.content}></Card>
      })} */}

      {/* <p>Contador: {contador}</p>
      <button onClick={() => cambiar("+")}>+</button>
      <button onClick={() => cambiar("-")}>-</button> */}

      {/* <button onClick={() => randNum()}>Color random</button> */}
      <button onClick={() => modoOsClar()}>{textmodo}</button>

      <Hijo color={modo}></Hijo>
    </>
  )
}

export default App
