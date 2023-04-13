import Autor from "./Autor";

export default function ListaAutores({listaAutores}) {
    return (
        <div>
            {listaAutores.length === 0 ?
                (
                    <div>Aún no existen autores</div>
                )
                : (
                    <div>
                        <h5>Lista de Autores ({listaAutores.length}): </h5>
                        <table className='table table-dark table-hover'>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Dirección</th>
                                <th>Edad</th>
                                <th>Hijos</th>
                                <th>Libros</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                                {listaAutores.map(autor => (
                                    <Autor key={autor.id} autor={autor}></Autor>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
}