import {Form , useNavigate, useLoaderData, redirect, useActionData} from "react-router-dom"
import { actualizarCliente, obtenerCliente } from "../data/clientes"
import Formulario from './../components/Formulario';
import Error from "../components/Error";

export async function loader({params}){

 const cliente = await obtenerCliente(params.clienteId)
 //error msg validation
 if(Object.values(cliente).length === 0 ){
    throw new Response("", {
        status: 404,
        statusText:"No hay resultados"
    })
 }

 return cliente
}

// data request useaction
export async function action({ request , params}) {

    const formData = await request.formData()
    const datos = Object.fromEntries(formData);

  
    const email = formData.get("email");
  //validation start ********
      const errores = [];
      if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios")
      }
      // email validation regultar expression
      let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  
      if(!regex.test(email)){
        errores.push("El email no es es válido")
      }
      // return errors
      if (Object.keys(errores).length) {
        return errores
      }
  //validation end ********

      //update client
     await actualizarCliente(params.clienteId, datos)
     return redirect("/")

  }
const EditarCliente = () => {

    const navigate = useNavigate();   //react-router-dom hook
    const cliente = useLoaderData();  //react-router-dom hook
    const errores = useActionData();  //react-router-dom hook

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
    


    <div className='flex justify-end'>
      <button
        onClick={() => navigate("/")}
        className='bg-blue-800 py-1 px-3 text-white font-bold uppercase'>
        Volver
      </button>
    </div>


    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

      {    /* Errors *****/}
      {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
      {    /*react router dom FORM *****/}

      <Form
        method="post"
        noValidate
      >
        <Formulario cliente={cliente}  />  {    /*Formulario component *****/}

        <input type="submit" className="mt-5 w-full bg-blue-800 p-3 uppercase text-white font-bold text-lg cursor-pointer text-center" value={"Guardar Cambios"} />

      </Form>

    </div>

  </>
    
  )
}

export default EditarCliente