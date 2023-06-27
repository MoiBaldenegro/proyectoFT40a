export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' placeholder="Ingresa personaje" />
         <button onClick={onSearch}>Agregar</button> 
      </div>
   );
}
