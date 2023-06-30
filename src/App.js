import style from "./App.module.css"
import Cards from "./components/cards/Cards";
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className={style.App}>
         <header className={style.header}>
            <img className={style.headerImg}  src="./assets/img/Rick-And-Morty-Logo.png" alt=""></img>
            
         </header>
         <section className={style.search}>
            <h1> Can we help?</h1>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </section>
         <aside className={style.aside}></aside>
         <main className={style.main}><Cards characters={characters} /></main>
         <footer className={style.footer}>FOOTER</footer> 
      </div>

   );
}

export default App;
