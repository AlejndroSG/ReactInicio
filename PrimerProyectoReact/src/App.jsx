// import Botton from "./components/Botton";
import Card from "./components/Card";
// import Contacto from "./components/Contacto";
// import Home from "./components/Home";

function App() {
  let datos = [
    {
      id: 0,
      titulo: "Toni de la rosa",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto?"
    },
    {
      id: 1,
      titulo: "Rosa de Toni",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam aliquid quisquam accusamus veritatis doloribus eligendi beatae quos tempore magnam."
    },
    {
      id: 2,
      titulo: "Rosa y Toni",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam aliquid quisquam accusamus veritatis doloribus eligendi beatae quos tempore magnam."
    }
  ]

  return (
    <>
      {/* <Home></Home>
      <Contacto></Contacto>
      <Botton titulo="Mostrar"></Botton>
      <Botton titulo="Eliminar"></Botton>
      <Botton></Botton> */}
      
      {datos.map((dato) =>{
        return <Card key={dato.id} titulo={dato.titulo} img={dato.img} content={dato.content}></Card>
      })}
    </>
  )
}

export default App
