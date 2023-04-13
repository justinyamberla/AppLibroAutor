import {getAutores} from "./autorService";

export async function getLibros(idAutor) {
    const respuesta = await getAutores()
    const autor = respuesta.find(autor => autor.id === idAutor)
    return autor.libros
}

export async function getLibroById(idLibro, idAutor) {
    const libros = await getLibros(idAutor)
    return libros.find(libro => libro.id === idLibro)
}

export async function crearLibro(datosLibro){
    await fetch('http://localhost:3000/api/libros', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(datosLibro)
    })
}

export async function actualizarLibro(datosLibro){
    await fetch('http://localhost:3000/api/libros', {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify(datosLibro)
    })
}


export async function eliminarLibro(datosLibro){
    await fetch('http://localhost:3000/api/libros', {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
        body: JSON.stringify(datosLibro)
    })
}