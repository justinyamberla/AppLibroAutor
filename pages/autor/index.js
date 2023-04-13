import Nav from "../../components/Nav";
import ListaAutores from "../../components/ListaAutores";
import {getAutores} from "../../services/autorService";
import Link from "next/link";

export default function index({listaAutores}) {

    return(
        <>
            <Nav></Nav>
            <div className="container" style={{paddingTop:30, paddingBottom:30}}>
                <h1>Autores</h1>
                <Link className='btn btn-primary' href='/autor/agregar'>Agregar autor</Link>
                <br />
                <br />
                <ListaAutores listaAutores={listaAutores}></ListaAutores>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await getAutores();
    return {
        props: {
            listaAutores: res
        },
    }
}
