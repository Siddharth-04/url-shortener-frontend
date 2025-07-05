import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='flex justify-center items-center w-full h-[450px]'> 
        <div className='flex flex-col items-center gap-1'>

            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="blue"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    </div>
  )
}

export default Loader