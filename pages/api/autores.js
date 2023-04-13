// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs");
let autores = require('../../data/data.json')

export default function handler(req, res) {

    let nuevoArrayAutores = []
    const metodo = req.method

    switch (metodo) {
        case 'GET':
            res.status(200).json(autores);
            break;
        case 'POST':
            const nuevoAutor = req.body
            autores.push(nuevoAutor)
            fs.writeFileSync('./data/data.json', JSON.stringify(autores))
            res.status(200).json({Mensaje: 'Autor creado!'});
            break;
        case 'PUT':
            nuevoArrayAutores = autores.map(autor => (
                autor.id === req.body.id ? req.body : autor
            ))
            //res.status(200).json(nuevoArrayAutores);
            fs.writeFileSync('./data/data.json', JSON.stringify(nuevoArrayAutores))
            res.status(200).json({Mensaje: 'Autor actualizado!'});
            break;
        case 'DELETE':
            const idEliminar = req.body
            nuevoArrayAutores = autores.filter((autor) => {
                return autor.id !== idEliminar
            });
            fs.writeFileSync('./data/data.json', JSON.stringify(nuevoArrayAutores))
            res.status(200).json({Mensaje: 'Autor eliminado!'});
            break;
    }

    /*if (req.method === "GET") {
        res.status(200).json(autores);
    }
    if (req.method === "PUT") {
        const nuevoArrayAutores = autores.map(autor => (
            autor.id === req.body.id ? req.body : autor
        ))
        //res.status(200).json(nuevoArrayAutores);
        fs.writeFileSync('./data/data.json', JSON.stringify(nuevoArrayAutores))
        res.status(200).json({Mensaje: 'Autor actualizado!'});
    }
    if (req.method === "POST") {
        const nuevoAutor = req.body
        autores.push(nuevoAutor)
        fs.writeFileSync('./data/data.json', JSON.stringify(autores))
        res.status(200).json({Mensaje: 'Autor creado!'});
    }
    if (req.method === "DELETE") {
        const idEliminar = req.body
        const nuevoArrayAutores = autores.filter((autor) => {
            return autor.id !== idEliminar
        });
        fs.writeFileSync('./data/data.json', JSON.stringify(nuevoArrayAutores))
        res.status(200).json({Mensaje: 'Autor eliminado!'});
    }*/
}
