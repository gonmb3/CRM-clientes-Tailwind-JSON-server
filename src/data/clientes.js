
export async function obtenerClientes(){
  /*get*/
    const resp = await fetch("http://localhost:3000/clientes")
    const data = await resp.json();

    return data
}
 /*get single client*/

export async function obtenerCliente(id){
    /*get*/
      const resp = await fetch(`http://localhost:3000/clientes/${id}`)
      const data = await resp.json();
  
      return data
  }

export async function agregarCliente(datos){
    /*post*/
    try {
        const resp = await fetch("http://localhost:3000/clientes",{
            method:"POST",
            body: JSON.stringify(datos),
            headers:{
                "Content-Type": "application/json"
            }
        })
        await resp.json()
        
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos){
       /*PUT*/
    try {
        const resp = await fetch(`http://localhost:3000/clientes/${id}`,{
            method:"PUT",
            body: JSON.stringify(datos),
            headers:{
                "Content-Type": "application/json"
            }
        })
        await resp.json()
        
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
       /*delete*/
    try {
        const resp = await fetch(`http://localhost:3000/clientes/${id}`,{
            method:"DELETE",
        })
        await resp.json()
        
    } catch (error) {
        console.log(error)
    }
}