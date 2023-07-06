import style from "./footer.module.css"
import { Link } from "react-router-dom";
export default function Footer(){


    return(
        <div className={style.footer}>
            <div className={style.container}>
                <ul>
                    <h4 className={style.h4}> Social </h4>
                    <li>Facebok</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div>
                <ul>
                    <h4 className={style.h4}> Coding </h4>
                    <li>GitHub</li>
                    <li>HackerRank</li>
                    <li>Codewars</li>
                    <li>Hack The Box</li>
                </ul>
            </div>
            <div className={style.contact}> Contact mc.moisesm16@gmail.com</div>
            <div className={style.button}>
                <button className={style.aboutMe}>
                    <Link to="/about"><img  className={style.ico} src="https://www.pngmart.com/files/21/About-Me-PNG-Photo.png" alt=""/></Link>
                </button>
            </div>
        </div>

    )
}