import style from "./searchBar.module.css";
import iconSearch from "../../../assets/img/search-icon.png";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   function handleChange (event){
      setId(event.target.value)
   }

   return (
      <div className={style.container}>
         <h1 className={style.h1}> Can we help? </h1>
         <div className={style.searchBar}>
            <input  className={style.input} type='search' placeholder="Search"  value={id} onChange={handleChange}/>
            <button  className={style.button} onClick={ function (){ onSearch(id) }}>
               <img className={style.iconSearch} src={iconSearch}></img>
            </button> 
         </div>  
         <div className={style.spanContainer}>
            <span className={style.span}> Human </span>
            <span className={style.span}> Alien </span>
            <span className={style.span}> Alive </span>
            <span className={style.span}> Dead </span>
            <span className={style.span}> Unknown</span>
            <span className={style.span}> Robot </span>
            <span className={style.span}> Female </span>
            <span className={style.span}> Male </span>
            


         </div>
      </div>
   );
}
