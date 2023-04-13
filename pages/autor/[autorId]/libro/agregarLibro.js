import Nav from "../../../../components/Nav";
import FormLibroCrear from "../../../../components/FormLibroCrear";
import {getAutores} from "../../../../services/autorService";

export default function agregar(props){
    return(
        <>
            <Nav></Nav>
            <div className='container' style={{paddingTop:30, paddingBottom:30}}>
                <h1>Agregar libro</h1>
                <h5>Agregue un libro al catálago de un autor</h5>
                <br />
                <FormLibroCrear idAutor={props.idAutor}></FormLibroCrear>
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
    return {
        props: {
            idAutor
        },
    }
}