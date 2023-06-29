import style from "./card.module.css";
export default function Card({name, status, species, gender,origin,image, onClose}) {
   return (
      <div className={style.cardStyle}>
         <div className={style.img}><img className={style.divImage}src={image} alt='' /> </div>
         <div className={style.textCardContainer}>
            <button  className={style.cardButton} onClick={onClose}>X</button>
            <h2>Nombre: {name}</h2>
            <h2>Estado: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <h2>Origen: {origin}</h2>
         </div>
         
      </div>
   );
}

