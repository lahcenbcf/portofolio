import React from 'react'
import {data} from './Data'
import {SiCoursera} from 'react-icons/si'
import photolahcen from '../../img/245607629_639322194144086_8606565052839424805_n.jpg'
import {AiOutlineLink} from 'react-icons/ai'
import './labs.css'
function Labs() {
    console.log(data)
  return (
    
    <div className='w-5/6 mx-auto my-3'>
      <h1 className='text-4xl text-center my-4'>my labs</h1>
      <div className='container grid grid-cols-1 sm:grid-cols-2 w-full mx-auto md:grid-cols-3 gap-8'>

        {
            data.map((item,index)=>
            <div key={index} className='border rounded-md border-solid border-slate-400 flex flex-col gap-2 p-4 shadow'>
                <div className='h-1/2 p-1 flex gap-x-2 justify-center items-center'>
                  <SiCoursera />
                 <h3 className='text-slate-900 text-start p-1 font-bold'>
                  {
                    item.title
                  }
                 </h3>
                </div>
                <div className='flex justify-center gap-2 items-center'>
        <p className='text-sm'>visit the github folder</p>
                <AiOutlineLink className='text-blue-500 border border-solid rounded border-blue-500 p-1 text-3xl' />
                </div>
               

          </div>)

        }
        

      
      </div>
    </div>
  )
}

export default Labs
