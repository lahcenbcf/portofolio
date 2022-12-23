import React from 'react'
import {FaReact,FaRegFilePowerpoint} from 'react-icons/fa'
import {AiFillHtml5,AiFillFileWord} from 'react-icons/ai'
import {DiCss3Full,DiJavascript1} from 'react-icons/di'
import {CgPexels} from 'react-icons/cg'
function Skill() {
  return (
    <div className='my-6 w-full'>
        <h1 className='text-4xl space-x-2 text-center py-2'>Skills</h1>
        <div className='grid grid-cols-1 w-3/5 gap-3 md:grid-cols-2 md:w-3/5 gap-x-6 mx-auto my-3'>
      <div className='p-4 border border-solid border-blue-500 rounded-md flex flex-col gap-y-2 shadow-lg'>
        <h3 className='text-md font-medium flex items-center gap-2'><AiFillHtml5 className='text-blue-500' /> HTML</h3>
        <h3 className='text-md font-medium flex items-center gap-2'><DiCss3Full className='text-blue-500' /> CSS</h3>
        <h3 className='text-md font-medium flex items-center gap-2'><DiJavascript1 className='text-blue-500' /> JAVASCRIPT</h3>
        <h3 className='text-md font-medium flex items-center gap-2'><FaReact className='text-blue-500' /> REACT JS</h3>
       </div>
      <div className='p-4 border border-solid border-blue-500 rounded-md flex flex-col gap-y-2 shadow-lg'>
      <h3 className='text-md font-medium flex items-center gap-2'><AiFillFileWord className='text-blue-500' /> WORD</h3>
        <h3 className='text-md font-medium flex items-center gap-2'><FaRegFilePowerpoint className='text-blue-500' /> POWER-POINT</h3>
        <h3 className='text-md font-medium flex items-center gap-2'><CgPexels className='text-blue-500' />LATEX</h3>
        <h3 className='text-md font-medium flex items-center gap-2'><FaReact className='text-blue-500' /> EXEL</h3>
      </div>
    </div>
    </div>
    
  )
}

export default Skill
