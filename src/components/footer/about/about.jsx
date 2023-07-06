import style from "./about.module.css"
import React from "react";


export default class About extends React.Component {
    constructor(props){
        super(props);
        }


    render(){
        return(

            <div className={style.about}> AQUI VA TODO ACERCA DE MI</div>
        )
    }
}



   