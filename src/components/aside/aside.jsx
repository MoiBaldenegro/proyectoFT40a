import style from "./aside.module.css";


export default function Aside(){


    return(
        <div className={style.aside}>
                <div>
                    <h2 className={style.h2}> THE MOST POPULAR </h2>

                    <h3 className={style.h3}> Rick Sanchez </h3>
                    <h3 className={style.h3}> Morty Smith </h3>
                    <h3 className={style.h3}> Summer Smith</h3>
                    <h3 className={style.h3}> Beth Smith</h3>
                    <h3 className={style.h3}> Jerry Smith</h3>
                    <h3 className={style.h3}> Abradolf Lincler</h3>
                    <h3 className={style.h3}> Adjudicator Rick</h3>
                    <h3 className={style.h3}> Agency Director</h3>
                    <h3 className={style.h3}> Alan Rails</h3>
                    <h3 className={style.h3}> Albert Einstein </h3>
                    
                </div>

            

        </div>
    )
    
        
}