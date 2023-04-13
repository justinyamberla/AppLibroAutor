import {useRouter} from 'next/router'
import {getAutorById, getAutores} from "../../../services/autorService";

export default function Autor({infoAutor}) {

    //const router = useRouter()
    //el id del query debe tener el mismo nombre de la carpeta que lo contiene
    //en este caso [autorId]
    //const idAutor = router.query.autorId

    return (
        <>
            <h1>Este es el autor {infoAutor.id}</h1>
            <br/>
            <br/>
            <p>De nombre</p>
            <strong>
                {infoAutor.nombre}
            </strong>
        </>
    )
}

// getStaticPaths: permite generar las rutas mientras existan archivos
export async function getStaticPaths() {
    const items = await getAutores();
    const paths = items.map(item => (
        {
            params: {
                autorId: item.id.toString() //El nombre de la propiedad debe ser el mismo nombre de la carpeta
            },
        }
    ));

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const id = params.autorId;
    const autor = await getAutorById(id);
    return {
        props: {
            infoAutor: autor
        }
    }
}