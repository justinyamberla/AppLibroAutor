import {getAutorById, getPathsFromIds} from "../../../services/autorService";
import Nav from "../../../components/Nav";
import FormAutorEditar from "../../../components/FormAutorEditar";

export default function AutorEditar({infoAutor}){
    return(
        <>
            <Nav></Nav>
            <div className='container' style={{paddingTop: 30, paddingBottom:30}}>
                <h1>Editar autor</h1>
                <h5>Edite la información del autor en cada campo</h5>
                <br />
                <FormAutorEditar infoAutor={infoAutor}></FormAutorEditar>
            </div>
        </>
    );
}

// Estas funciones de NextJS nos permiten extraer los datos de nuestra API

// getStaticPaths: permite generar las rutas mientras existan archivos
export async function getStaticPaths() {
    const paths = await getPathsFromIds();

    return {
        paths: paths,
        fallback: false,
    };
}

// getStaticProps: permite obtener props al generar una página
export async function getStaticProps({params}) {
    const id = params.id
    const autor = await getAutorById(id);

    return {
        props: {
            infoAutor: autor
        }
    }
}