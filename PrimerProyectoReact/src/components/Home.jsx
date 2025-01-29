import css from './Home.module.css';

const Home = () => {
    const estilo = {
        color: "red",
        fontSize: "5rem"
    }
  return (
    <>
        {/* <button onClick={}>Click</button> */}
        <div className={css.container}>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laboriosam maiores dolores quasi voluptatum debitis quod sint deleniti blanditiis maxime rerum nihil eum cupiditate doloremque, voluptas delectus nobis doloribus nemo.</p>
        </div>
    </>
  )
}

export default Home