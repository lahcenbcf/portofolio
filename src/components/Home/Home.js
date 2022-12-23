import React, { useEffect, useState } from 'react'
import './Home.css'
import {BsFacebook} from 'react-icons/bs'
import {HiLockClosed} from 'react-icons/hi'
import ReactTyped from 'react-typed'
import {AiFillLinkedin,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'



function Home({setFound}) {
    const skills=[
        'a junior web developper','Js & reactJs','designer'
    ]
    
  return (
    <div className='home'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='signout bg-blue-500 group' onClick={(e)=>{
            e.preventDefault()
            setFound(false)
        }}>

            <h2 className='text-sm text-black font-bold p-2'>sign-out</h2>
<HiLockClosed className='h-full w-full absolute left-0 bg-blue-500 group-hover:left-[70px] duration-300 ease-linear'/>
        </div>
        <div className='arrow'>
                </div>
        <div className='links flex flex-col gap-y-3'>
            <a href=''>
            <BsFacebook />
            </a>
            <a href=''>
              <AiFillLinkedin />  
            </a>
            <a href=''>
                <AiFillGithub />
            </a>
            <a href=''>
                <AiOutlineInstagram />
            </a>
        </div>
      <div className='userinfo flex flex-col gap-y-10 my-[100px] md:flex-row md:justify-around items-center'>
        <div className='user'>
        <div className='userpicture rounded-xl'>
            </div>
        <div className='bg border rounded-xl'></div>
        </div>
        <div className='info flex flex-col gap-y-3 w-48'>
            <h1 className='title text-3xl'>Hassane BENCHAREF</h1>
            <h4 className='text-lg p-3'>who am I</h4>
            
            <ReactTyped strings={skills} typeSpeed={40} backSpeed={30} className='text-gray-800 font-bold' loop />
              
            
        </div>
        </div>
        
    </div>
  )
}

export default Home
