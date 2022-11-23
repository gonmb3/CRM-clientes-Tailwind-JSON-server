import { Form, useNavigate, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';


export async function action({params}){
 
    eliminarCliente(params.clienteId);
    return redirect("/")
}

const Cliente = ({ cliente }) => {

    const { name, role, email, id, phone } = cliente;
    const navigate = useNavigate(); // react-router-dom hook

    return (

        <>
            <tr className='border-b'>
                <td className="p-6">
                    <p className="text-2xl text-gray-800">{name} </p>
                    <p className='mt-2'>Rol: {role} </p>
                </td>

                <td className="p-6">
                    <tr className="text-gray-600">
                        <p className="text-gray-800">  <span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
                        <p className="text-gray-800">  <span className='text-gray-800 uppercase font-bold'>Telefono: </span>{phone}</p>
                    </tr>
                </td>

                <td className="flex p-6 gap-3">
                    <button type='button'
                        onClick={() => navigate(`/clientes/${id}/editar`)}
                        className="bg-blue-600 hover:bg-blue-800  px-4 rounded text-white py-2 font-bold uppercase text-xs">
                        Editar
                    </button>
                    <Form
                    method='post'
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={e => {
                        if(!confirm("Deseas eliminar este registro?")){
                            e.preventDefault();
                        }
                    } }
                    >
                        <button                            
                            type='submit' className="bg-red-600 hover:bg-red-800  px-4 rounded text-white py-2  font-bold uppercase text-xs"
                        >Eliminar
                        </button>

                    </Form>

                </td>

            </tr>

        </>
    )
}

export default Cliente