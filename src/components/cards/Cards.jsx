import Card from './Card';
import style from "./Cards.module.css";



export default function Cards({characters}) {

   return <div className={style.cardsContainer}>
            {
               characters.map(function({ id, name, species, status, gender, origin, image} ){
                  return(
                     <Card
                        key = { id }
                        name = {name}
                        species = { species }
                        status = { status }
                        gender = { gender }
                        origin = { origin.name }
                        image={image }
                        onClose = {function(){
                           alert("Simulacion de cierre");
                        }}
                     />

                  )


                     
                  
               })

            }
               
               
          </div>;
}
