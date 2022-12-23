import React from 'react'
import {AiFillLinkedin,AiOutlineSearch} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
function Footer() {
  return (
    <div className='container mx-auto bg-blue-500 rounded-lg p-6 grid md:grid-cols-3 grid-cols-2 my-4'>
      <div className='flex flex-col gap-y-3 justify-start p-4'>
        <h1 className='text-start text-3xl text-white'><span className='font-bold text-6xl ' >.</span>lahcen bcf</h1>
        <div className='flex justify-between items-center w-3'>
            <div className='w-fit h-full text-blue-500 text-xl p-1 bg-white'>
<AiOutlineSearch />
            </div>
            <input className='bg-white outline-none p-1' placeholder='search' />
        </div>
      </div>
      <div className='flex flex-col gap-y-3'>
<div className='flex w-fit gap-x-2 flex-row justify-between items-center'>
    <div className='bg-blue-500 text-white w-fit'>
        <AiFillLinkedin />
    </div>
    <h4 className='text-sm font-thin text-white'>Hassane BENACHAREF</h4>
</div>
<div className='flex w-fit rounded gap-x-2 flex-row justify-between items-center'>
    <div className='bg-blue-500 text-white w-fit'>
        <BsFacebook className='animate-ping' />
    </div>
    <h4 className='text-sm font-thin text-white'>lahcen BCF</h4>
</div>
<div className='flex w-fit rounded gap-x-2 flex-row justify-between items-center'>
    <div className='icon bg-blue-500 text-white w-fit'>
        <AiFillInstagram className='animate-spin' />
    </div>
    <h4 className='text-sm font-thin text-white'>@BCF lahcen</h4>
</div>
<div className='flex w-fit rounded gap-x-2 flex-row justify-between items-center'>
    <div className='icon bg-blue-500 text-white w-fit'>
        <SiGmail />
    </div>
    <h4 className='text-sm font-thin text-white'>h.bencharef@esi-sba.dz</h4>
</div>
      </div>
      <a className='rounded-sm bg-white p-2 text-center w-fit h-fit text-blue-500 shadow '>contact me</a>
    </div>
  )
}

export default Footer
