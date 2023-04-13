import Libro from "./Libro";

export default function ListaLibros({listaLibros, idAutor}) {
    return (
        <div>
            {listaLibros.length === 0 ?
                (
                    <div>Aún no existen libros</div>
                )
                : (
                    <div>
                        <h5>Lista de Libros ({listaLibros.length}): </h5>
                        <table className='table table-dark table-hover'>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Título</th>
                                <th>Número de Páginas</th>
                                <th>Género</th>
                                <th>Fecha de Publicación</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listaLibros.map(libro => (
                                <Libro key={libro.id} libro={libro} idAutor={idAutor}></Libro>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
}