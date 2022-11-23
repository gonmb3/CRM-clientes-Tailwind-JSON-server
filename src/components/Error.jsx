import React from 'react'

const Error = ({children}) => {
  return (
    <div className='text-center my-4 text-white bg-red-600 p-3 font-bold'>
        {children}
    </div>
  )
}

export default Error