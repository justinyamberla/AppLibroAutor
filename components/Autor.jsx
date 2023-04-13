import Link from "next/link";
import {eliminarAutor} from "../services/autorService";
import styles from '../styles/Home.module.css'

export default function Autor({autor}) {

    const eliminar = async () => {
        let validar = confirm("Está seguro de eliminar el libro?")
        if(validar){
            await eliminarAutor(autor.id)
            window.location.reload()
        }
    }

    return(
        <>
            <tr>
                <td>{autor.id}</td>
                <td>{autor.nombre}</td>
                <td>{autor.direccion}</td>
                <td>{autor.edad}</td>
                <td>{autor.hijos}</td>
                <td>
                    <Link className={styles.linkLibro} href={`/autor/${autor.id}/libro/`}>{autor.libros.length} libros</Link>
                </td>
                <td>
                    <a href={`/autor/editar/${autor.id}`} className='btn btn-warning' style={{margin: 5}}>Editar</a>
                    <button className='btn btn-danger' onClick={eliminar} style={{margin: 5}}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}