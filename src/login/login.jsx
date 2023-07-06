import style from "./login.module.css"
import { useState } from "react"
import  iconForm  from "../assets/img/iconRickAndMorty.png"
import  perrito  from "../assets/img/perrito.webp"
import  logo  from "../assets/img/Rick-And-Morty-Logo.png"
import { Link } from "react-router-dom"

export default function Login(){


    const [ errors, setErros] = useState({});
    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    


    function validation (userData){
        const emailRegex = {};

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
            emailRegex.email = "El email no es valido"
        } if(!userData.email){
            emailRegex.email = "Este campo es obligatorio"
        } if(userData.email.length > 35){
            emailRegex.email = "Es email excede el numero de caracteres"
        } if (userData.password.length < 6 ){
            emailRegex.password = "La contraseña debe tener al menos 6 caracteres"
        }

        return emailRegex;

    }
   
    function handleChange(event){

        setUser({ ...user, [event.target.name] : event.target.value  },
                    )
    console.log(user)
        setErros(validation({ ...user, [event.target.name] : event.target.value  },))
                   
    }


    return(
        <div className={style.container}>
            <img  className={style.logo} src={logo} alt=""></img>
            <div className={style.background}>
                <img src="" alt=""></img>
            </div>
            <div >
            <form action="" className={style.form} >
                <img  className={style.iconForm}src={iconForm} alt=""></img>
                <input 
                    className={style.input}
                    type="mail"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                ></input>
                {errors.email && <h4 className={style.errors}>{errors.email}</h4>}
                <input
                    className={style.input}
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                ></input>
                {errors.password && <h4 className={style.errorsDos}>{errors.password}</h4>}
                <Link to="/search">
                    <input className={style.button} type="submit"></input>
                </Link>
            </form>
            <img  className={style.perrito} src={perrito} alt=""></img>
            <span className={style.texto}> Proyecto integrador para HENRY Modulo 2 by Moises Baldenegro Melendez Julio 2023</span>
        </div>

        </div>
        
        
        
    )
}