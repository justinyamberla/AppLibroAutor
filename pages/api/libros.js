const fs = require("fs");
let autores = require('../../data/data.json')

export default function handler(req, res) {

    const autorId = req.body.idAutor
    const libroId = req.body.id
    const autorIndex = autores.findIndex(autor => autor.id === autorId)
    const libroIndex = autores[autorIndex].libros.findIndex(libro => libro.id === libroId)

    const nuevoLibro = {
        id: req.body.id,
        titulo: req.body.titulo,
        numeroPaginas: req.body.numeroPaginas,
        genero: req.body.genero,
        fechaPublicacion: req.body.fechaPublicacion
    }


    const metodo = req.method
    switch (metodo) {
        case 'GET':
            res.status(200).json();
            break;
        case 'POST':
            autores[autorIndex].libros.push(nuevoLibro)
            fs.writeFileSync('./data/data.json', JSON.stringify(autores))
            res.status(200).json({Mensaje: 'Autor creado!'});
            break;
        case 'PUT':
            autores[autorIndex].libros[libroIndex] = nuevoLibro;
            fs.writeFileSync('./data/data.json', JSON.stringify(autores))
            res.status(200).json({Mensaje: 'Autor actualizado!'});
            break;
        case 'DELETE':
            autores[autorIndex].libros.splice(libroIndex, 1)
            fs.writeFileSync('./data/data.json', JSON.stringify(autores))
            res.status(200).json({Mensaje: 'Autor eliminado!'});
            break;
    }
}