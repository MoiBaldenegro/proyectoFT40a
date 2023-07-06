import Details from "../main/details/details";
import style from "./card.module.css";
import { Link } from "react-router-dom";
export default function Card({id, name, status, species, gender,origin,image, onClose}) {
   return (
      <div className={style.cardStyle}>
         <Link to={`/details/${id}`}>
            <div className={style.img}><img className={style.divImage} src={image} alt='' /> </div>
          </Link>
         <div className={style.textCardContainer}>
         <button  className={style.cardButton} onClick={function(){onClose(id)}}>X</button>
            <div className={style.nombre}>
               <h2 className= {style.name}>{name}</h2>
            </div>
            
            <h2>Estado: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <h2>Origen: {origin}</h2>
         </div>
         
      </div>
   );
}

