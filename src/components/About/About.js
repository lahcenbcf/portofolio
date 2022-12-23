import React from 'react'
import {data} from './Data'
import './about.css'
function About() {
  return (
    <div className='about my-20 flex flex-col gap-y-3'>
      <h1 className='aboutTitle text-gray-900 text-center text-4xl'>
        About me
      </h1>
      <div className='box border border-solid border-gray-300 rounded p-4 gap-y-4 flex flex-col w-4/5 md:w-1/3  h-60'>
{
    data.map((item,index)=><div key={index} className='flex justify-center gap-x-3 items-center'>
        <span className='text-lg text-blue-700'>{item.icon}</span>
        <h3 className='text-md'>{item.info}</h3>
    </div>)
}
      </div>
    </div>
  )
}

export default About
