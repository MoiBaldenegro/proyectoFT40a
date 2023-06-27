import Card from './Card';

export default function Cards({characters}) {

   return <div>
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
