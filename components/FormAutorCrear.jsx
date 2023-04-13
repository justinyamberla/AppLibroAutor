import Link from "next/link";
import {crearAutor} from "../services/autorService";
import {useState} from "react";

export default function FormAutorCrear(){

    const [datosAutor, setDatosAutor] = useState({
        id: '',
        nombre: '',
        direccion: '',
        edad: 0,
        hijos: 0,
        libros: []
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
            [event.target.name]: Number(event.target.value)
        })
    }

    const guardarDatos = async (event) => {
        event.preventDefault();
        await crearAutor(datosAutor)
        window.history.back()
    };

    return(
        <div className='row'>
            <div className="col-md-3"></div>
            <div className='col-md-6'>
                <form onSubmit={guardarDatos}>
                    <div className="mb-3">
                        <label htmlFor='input-autor-id'>Id único del autor (no se podrá editar):</label>
                        <input required className='form-control' type='text' name='id' id='input-autor-id'
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-nombre'>Nombre del autor:</label>
                        <input className='form-control' type='text' name='nombre' id='input-autor-nombre'
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-dir'>Dirección del autor:</label>
                        <input className='form-control' type='text' name='direccion' id='input-autor-dir'
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-edad'>Edad del autor:</label>
                        <input className='form-control' type='number' name='edad' id='input-autor-edad'
                               onChange={handleInputNumber}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='input-autor-hijos'>Hijos del autor:</label>
                        <input className='form-control' type='number' name='hijos' id='input-autor-hijos'
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