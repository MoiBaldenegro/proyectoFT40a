import style from "./header.module.css";
import logo from "../../assets/img/Rick-And-Morty-Logo.png";
import { Link }  from "react-router-dom"
export default function Header (){

    return(
        
        <div className={style.header}>
            
            <div className={style.logoBanner}>
                <img className={style.logo} src = {logo} alt="Moises"/>
                <h3 className={style.font}> Moises M16 | FT40a </h3>
            </div> 
            <div className={style.buttonsContainer}>
                <Link to="/" className={style.linkButton}> 
                    <button className={style.loginButton}>Login </button>
                </Link>  

                <button className={ style.searchButton}> Search </button>
            </div>  
        </div>
    )
}


