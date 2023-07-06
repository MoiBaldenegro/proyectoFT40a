import SearchBar from "./search/SearchBar"
import style from "./section.module.css"

export default function Section ({ onSearch }){

    return(
        <div className={style.SearchBar}>
            <SearchBar onSearch={ onSearch } />
        </div>
        
        
    )
}