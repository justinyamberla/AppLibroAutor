
export async function getAutores() {
    const response = await fetch('http://localhost:3000/api/autores')
    return await response.json();
}

export async function getAutorById(id) {
    const items = await getAutores()
    return items.find(item => item.id === id)
}

export async function getPathsFromIds() {
    const items = await getAutores();
    return items.map(item => (
        {
            params: {
                id: item.id.toString()//cada id de los objetos
            },
        }
    ));
}

export async function crearAutor(datosAutor){
    await fetch('http://localhost:3000/api/autores', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(datosAutor)
    })
}

export async function actualizarAutor(datosAutor){
    await fetch('http://localhost:3000/api/autores', {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify(datosAutor)
    })
}

export async function eliminarAutor(id){
    await fetch('http://localhost:3000/api/autores', {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
        body: JSON.stringify(id)
    })
}