import {useState} from "react";
import {actualizarLibro} from "../services/libroService";
import Link from "next/link";

export default function FormLibroEditar({infoLibro, idAutor}) {

    const [datosLibro, setDatosLibro] = useState({
        idAutor: idAutor,
        id: infoLibro.id,
        titulo: infoLibro.titulo,
        numeroPaginas: infoLibro.numeroPaginas,
        genero: infoLibro.genero,
        fechaPublicacion: infoLibro.fechaPublicacion,
    });

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatosLibro({
            ...datosLibro,
            [event.target.name] : event.target.value
        })
    };

    const handleInputNumber = (event) => {
        setDatosLibro({
            ...datosLibro,
            [event.target.name]: Number(event.target.value)
        })
    }

    const guardarDatos = async (event) => {
        event.preventDefault();
        await actualizarLibro(datosLibro)
        window.history.back()
    };

    return (
        <div className='row'>
            <div className="col-md-3"></div>
            <div className='col-md-6'>
                <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                        <label htmlFor='input-libro-titulo'>Título del libro:</label>
                        <input className='form-control' type='text' name='titulo' id='input-libro-titulo'
                               defaultValue={infoLibro.titulo}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-num-paginas'>Número de páginas:</label>
                        <input className='form-control' type='number' name='numeroPaginas' id='input-num-paginas'
                               defaultValue={infoLibro.numeroPaginas}
                               onChange={handleInputNumber}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-libro-genero'>Género:</label>
                        <input className='form-control' type='text' name='genero' id='input-libro-genero'
                               defaultValue={infoLibro.genero}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-libro-fecha'>Fecha de Publicación:</label>
                        <input className='form-control' type='text' name='fechaPublicacion' id='input-libro-fecha'
                               defaultValue={infoLibro.fechaPublicacion}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button style={{marginRight: 10}} className='btn btn-success' type='submit'>Guardar</button>
                        <Link href={`/autor/${idAutor}/libro`} className='btn btn-danger'>Cancelar</Link>
                    </div>
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
}