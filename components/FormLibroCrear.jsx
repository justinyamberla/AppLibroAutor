import {useState} from "react";
import {crearLibro} from "../services/libroService";
import Link from "next/link";

export default function FormLibroCrear({idAutor}) {

    const [datosLibro, setDatosLibro] = useState({
        idAutor: idAutor,
        id: 0,
        titulo: '',
        numeroPaginas: 0,
        genero: '',
        fechaPublicacion: '',
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
        await crearLibro(datosLibro)
        window.history.back()
    };

    return (
        <div className='row'>
            <div className="col-md-3"></div>
            <div className='col-md-6'>
                <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                        <label htmlFor='input-libro-id'>Id único del libro (no se podrá editar):</label>
                        <input required className='form-control' type='text' name='id' id='input-libro-id'
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-libro-titulo'>Título del libro:</label>
                        <input className='form-control' type='text' name='titulo' id='input-libro-titulo'
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-num-paginas'>Número de páginas:</label>
                        <input className='form-control' type='number' name='numeroPaginas' id='input-num-paginas'
                               onChange={handleInputNumber}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-libro-genero'>Género:</label>
                        <input className='form-control' type='text' name='genero' id='input-libro-genero'
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-libro-fecha'>Fecha de Publicación:</label>
                        <input className='form-control' type='text' name='fechaPublicacion' id='input-libro-fecha'
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