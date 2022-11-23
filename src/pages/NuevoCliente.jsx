import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Error from "../components/Error";
import { agregarCliente} from "../data/clientes";

import Formulario from './../components/Formulario';


// data request useaction
export async function action({ request }) {

  const formData = await request.formData()
  const datos = Object.fromEntries(formData);

  console.log(datos)

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

   await agregarCliente(datos)

   return redirect("/")
}



const NuevoCliente = () => {

  const navigate = useNavigate();   //react-router-dom hook
  const errores = useActionData(); //react-router-dom hook

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p>Lena todos los campos para registrar un nuevo cliente</p>


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
          <Formulario  />  {    /*Formulario component *****/}

          <input type="submit" className="mt-5 w-full bg-blue-800 p-3 uppercase text-white font-bold text-lg cursor-pointer text-center" value={"Registrar Cliente"} />

        </Form>

      </div>

    </>
  )
}

export default NuevoCliente