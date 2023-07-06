import Header from "./components/header/header";
import style from "./App.module.css";
import Cards from "./components/cards/Cards";
import Section from "./components/searchSection/section"
import Aside from "./components/aside/aside";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import About from "./components/footer/about/about"
import Details from "./components/main/details/details";
import Login from "./login/login"
import { Routes, Route, useLocation } from "react-router-dom"
import { useState } from "react";
import axios from "axios";


const email = "mc.moisesm16@gmail.com"
const password = 950817
function App() {
   const location = useLocation()
   const [characters, setCharacters] = useState([
   ]);
   const [acces, setAcces] = useState(false)

   
   function onSearch(id){
      axios( `https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
         if(data.name){
            setCharacters((characters) => [...characters, data]);
         } else{
            window.alert("No hay personajes con este ID");
         }
      })
   }
   
   function onClose(id){
      setCharacters(characters.filter(function(character){
         return character.id !== id;
      }))
   }
   
   function login(userData){
      if(userData.email == email && userData.password == password){
         setAcces(true)
         console.log("acceso permitido")
      }

   }

   return (

     
      
      <div className={style.App}>
      {
         location.pathname !== "/" && <Header/>
         
      } 
           
         <Routes>
            <Route path="/" element={<Login Login={login}/>}/> 
            <Route path="/home" element={[,<Home/>]}/>
            <Route path="/search" element={[,
                                          <Section onSearch={onSearch}/>,
                                          <Aside/>,
                                          <Footer/>,
                                          <main className={style.main}>
                                             <Cards characters={characters} onClose={onClose} />
                                          </main>,
                                           ]}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/about" element={<About/>}/> 
         </Routes>
           
      
      

     
      </div>

   );
}

export default App;
