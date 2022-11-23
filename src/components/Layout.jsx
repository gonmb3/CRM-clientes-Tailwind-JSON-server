import React from 'react'
import { Link, NavLink, Outlet} from 'react-router-dom'


const Layout = () => {

  return (
    <div> 
       <div className='md:flex md:min-h-screen w-full  mx-auto'>
        <aside className="md:w-1/4 bg-blue-600 py-10">
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

        <nav className='mt-10  '>
              <NavLink
              to="/"
               className={({isActive}) => isActive ? "text-blue-300 text-2xl block m-2" : "text-white text-2xl block m-2"}>
                Clientes
              </NavLink>
              <NavLink
              to="/clientes/nuevo"
               className={({isActive}) => isActive ? "text-blue-300 text-2xl block m-2" : "text-white text-2xl block m-2"}>
                  Nuevo Cliente
              </NavLink>
        </nav>
        </aside>
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet/>
        </main>
    </div>
    </div>
  )
}

export default Layout