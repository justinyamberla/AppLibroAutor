import {useState} from "react";
import {actualizarAutor} from "../services/autorService";
import Link from "next/link";

export default function FormAutorEditar({infoAutor}) {

    const [datosAutor, setDatosAutor] = useState({
        id: infoAutor.id,
        nombre: infoAutor.nombre,
        direccion: infoAutor.direccion,
        edad: infoAutor.edad,
        hijos: infoAutor.hijos,
        libros: infoAutor.libros
    });

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatosAutor({
            ...datosAutor,
            [event.target.name] : event.target.value
        })
    };

    const handleInputNumber = (event) => {
        setDatosAutor({
            ...datosAutor,
            [event.target.name] : Number(event.target.value)
        })
    }

    const guardarDatos = async (event) => {
        event.preventDefault();
        await actualizarAutor(datosAutor)
        window.history.back()
    };

    return (
        <div className='row'>
            <div className="col-md-3"></div>
            <div className='col-md-6'>
                <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                        <label htmlFor='input-autor-nombre'>Nombre del autor:</label>
                        <input className='form-control' type='text' name='nombre' id='input-autor-nombre'
                               defaultValue={infoAutor.nombre}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-dir'>Dirección del autor:</label>
                        <input className='form-control' type='text' name='direccion' id='input-autor-dir'
                               defaultValue={infoAutor.direccion}
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-edad'>Edad del autor:</label>
                        <input className='form-control' type={'number'} name='edad' id='input-autor-edad'
                               defaultValue={infoAutor.edad}
                               onChange={handleInputNumber}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-hijos'>Hijos del autor:</label>
                        <input className='form-control' type='number' name='hijos' id='input-autor-hijos'
                               defaultValue={infoAutor.hijos}
                               onChange={handleInputNumber}
                        />
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button style={{marginRight: 10}} className='btn btn-success' type='submit'>Guardar</button>
                        <Link href='/autor/' className='btn btn-danger'>Cancelar</Link>
                    </div>
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
}