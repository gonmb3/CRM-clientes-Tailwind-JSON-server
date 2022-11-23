import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";


  
  export function loader() {
    /*  get data clientes.js function*/
    const datosClientes = obtenerClientes();

    return datosClientes

  }


  const Index = () => {

    /*get data from loader */
    const datosClientes = useLoaderData();

    return (
      <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p>Administra tus Clientes</p>

      {
        datosClientes ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Clientes</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody className="">
              {
                datosClientes.map(cliente => (
                  <Cliente cliente={cliente} key={cliente.id} />
                ))
              }
            </tbody>
          </table>
        ) : (
          <h2>caca</h2>
        )
      }
    </>
  )
}

export default Index