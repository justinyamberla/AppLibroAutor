import {eliminarLibro} from "../services/libroService";

export default function Libro({libro, idAutor}) {

    const datosLibro = {idAutor, ...libro}
    const eliminar = async () => {
        let validar = confirm("Está seguro de eliminar el libro?")
        if(validar){
            await eliminarLibro(datosLibro)
            window.location.reload()
        }
    }

    return(
        <>
            <tr>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.numeroPaginas}</td>
                <td>{libro.genero}</td>
                <td>{libro.fechaPublicacion}</td>
                <td>
                    <a href={`/autor/${idAutor}/libro/editar/${libro.id}`} className='btn btn-warning' style={{margin: 5}}>Editar</a>
                    <button className='btn btn-danger' onClick={eliminar} style={{margin: 5}}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

