import Nav from "../../../../components/Nav";
import { getLibros} from "../../../../services/libroService";
import Link from "next/link";
import ListaLibros from "../../../../components/ListaLibros"
import {getAutores} from "../../../../services/autorService";

export default function index(props) {

    return(
        <>
            <Nav></Nav>
            <div className='container' style={{paddingTop:30, paddingBottom:30}}>
                <h1>Libros</h1>
                <Link className='btn btn-primary' href={`/autor/${props.idAutor}/libro/agregarLibro`}>Agregar libro</Link>
                <br />
                <br />
                <ListaLibros listaLibros={props.listaLibros} idAutor={props.idAutor}></ListaLibros>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const items = await getAutores();
    const paths = items.map(item => (
        {
            params: {
                autorId: item.id.toString()
            },
        }
    ));

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const idAutor = params.autorId
    const res = await getLibros(idAutor);
    return {
        props: {
            listaLibros: res,
            idAutor
        },
    }
}