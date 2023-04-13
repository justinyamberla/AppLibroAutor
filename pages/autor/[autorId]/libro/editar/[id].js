import {getLibroById} from "../../../../../services/libroService";
import Nav from "../../../../../components/Nav"
import FormLibroEditar from "../../../../../components/FormLibroEditar";
import {getAutores} from "../../../../../services/autorService";

export default function AutorEditar({infoLibro, idAutor}) {
    return (
        <>
            <Nav></Nav>
            <div className='container' style={{paddingTop: 30, paddingBottom: 30}}>
                <h1>Editar libro</h1>
                <h5>Edite la información del libro en cada campo</h5>
                <br/>
                <FormLibroEditar infoLibro={infoLibro} idAutor={idAutor}></FormLibroEditar>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const items = await getAutores();
    const paths = items.map(item => (item.libros.map(libro => (
            {
                params: {
                    autorId: item.id.toString(),
                    id: libro.id.toString()
                }
            }
        ))

    )).flat();

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const idAutor = params.autorId
    const idLibro = params.id
    const res = await getLibroById(idLibro, idAutor);
    return {
        props: {
            infoLibro: res,
            idAutor
        },
    }
}
