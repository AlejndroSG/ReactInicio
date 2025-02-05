import React, { useEffect, useState } from 'react'
import Buscador from './Buscador';

const Posts = () => {
  // Vatiable de estado
  const [posts, setPosts] = useState([]);

  // codigo controlar mediante efecto
  useEffect(() =>{
    // llamada a la API
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => respuesta.json())
    .then(datos => setPosts(datos))
  },[]);

  const [palabra, setPalabra] = useState("");
  const traer = (palabra) =>{
    setPalabra(palabra.toUpperCase());
  }
  console.log(palabra)

  return (
    <>
    <Buscador traer={traer}></Buscador>
      <div className="container border p-5">
        <div className="row p-4">
          {
            posts.map(post =>{
              return(
                post.title.toUpperCase().includes(palabra.toUpperCase()) &&
                <div className="col-md-4" key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.body}</p>
                      <button className="btn btn-primary btn-sm mt-2">Leer</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </>
  )
}

export default Posts