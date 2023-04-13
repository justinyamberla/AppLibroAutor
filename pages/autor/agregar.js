import Nav from "../../components/Nav";
import FormAutorCrear from "../../components/FormAutorCrear";

export default function agregar(){
    return(
        <>
            <Nav></Nav>
            <div className='container' style={{paddingTop:30, paddingBottom:30}}>
                <h1>Crear autor</h1>
                <h5>Agregue la información del nuevo autor</h5>
                <br />
                <FormAutorCrear></FormAutorCrear>
            </div>
        </>
    );
}