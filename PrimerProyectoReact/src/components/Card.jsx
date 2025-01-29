import Botton from "./Botton";
import css from "./Card.module.css";

const Card = ({titulo, img, content}) => {
  return (
    <>
        <div className={css.card}>
            <img src={img} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{content}</p>
            <Botton titulo="Me Gusta"></Botton>
        </div>
    </>
  )
}

export default Card