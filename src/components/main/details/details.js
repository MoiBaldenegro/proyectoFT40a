import React, { useEffect, useState } from "react";
import style from "./details.module.css";
import { useParams } from "react-router-dom";
import axios from "axios"
import { Link } from "react-router-dom"
 

export default function Details(){
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({data}) => {
                if(data.name){
                    setCharacter(data)
                } else {

                window.alert("No existe ese personaje");
            }
        }
    ).catch(function(error){window.alert("No se ha podido encontrar papirrin")})

        return () => {
            console.log("Componente desmontado");
        };
}, []);


        return(
            <div className={style.detailsContainer}>
                <img  className={style.image } src={character.image} alt="personaje"/> 
                <div className={style.container}>
                    <h2>{character.name}</h2>
                    <h3>{character.status}</h3>
                    <section className={style.spanContainer}>
                        <span className={style.spanTres}>{character.species} </span>
                        <span className={style.spanDos}>{character.gender}</span> 
                        {character.origin && <span className={style.span}>{character.origin.name}</span>}
                        <Link to="/search" className={style.linkButton}> 
                            <button className={style.backButton}> ←    Back </button>
                        </Link>
                        
                    </section>
                    </div>

            </div>
            
        ) 
        
};
        

