import style from '../styles/Nav.module.css'
import Link from "next/link";

export default function Nav(){
    return(
        <div className={style.nav}>
            <div>
                <Link className={style.link} href={'/'}>Regresar a la página principal</Link>
            </div>
            <div>
                <Link className={style.link}  href={'/autor/'}>Autores</Link>
            </div>
        </div>
    );
}