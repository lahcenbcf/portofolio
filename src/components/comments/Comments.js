import React, { useEffect, useReducer, useState } from 'react'
import {IoIosAddCircle} from 'react-icons/io'
const reducer=(state,action)=>{
switch(action.type){
    case 'AUTHOR':
        return {
            ...state, author:action.value
        }
    case 'COMMENT':
        return {
            ...state,comment:action.value
        }
}
}


const Comments = () => {
  
    
    const [isshown,setIsshown]=useState(false)
    const [state,dispatch]=useReducer(reducer,{
        author:'',comment:''
    })

  
    
    const submitData=async (e)=>{
        e.preventDefault()
         fetch('http://localhost:8000/data',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
            ,
            body:JSON.stringify(state)
        })
        console.log('is launched')
        const result = await fetch('http://localhost:3000/create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
            ,body:JSON.stringify(state)
        })
        console.log(result)
    }
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
        const res= await fetch("http://localhost:8000/data")
        const data=await res.json()
        setData(data)
          
    }
    fetchData()
    }
    
    ,[submitData])
      return (
    <div className='container my-5 mx-auto p-4'>
        <h1 className='text-4xl text-center text-blue-500 space-x-3'>
            Comments
        </h1>
<div className='flex flex-wrap gap-4 my-4 justify-center'>
    {
      data.map((item,idex)=>
      <div className='p-3 w-fit h-fit border border-slate-300 shadow flex flex-col gap-y-3 hover:border-slate-600' key={idex}>
<h4 className='text-md space-x-3 text-center font-bold text-black'>
{item.author}
</h4>
<p className='text-sm p-3 text-center text-slate-500'>{item.comment}</p>
      </div>
  )
    }
</div>
      <button className='flex items-center gap-x-2 justify-between group border border-blue-800 bg-blue-800 text-white hover:border-blue-400 duration-300 hover:bg-white my-2 mx-auto rounded-sm p-2' onClick={()=>{
setIsshown(!isshown)
      }}>
        <h3 className='text-md text-center hover:text-blue-300'>add comment</h3>
        <span><IoIosAddCircle className='text-xl group-hover:text-blue-500 group-hover:rotate-45 duration-300' /></span>
      </button>
      {
        isshown && <form className='border shadow-sm rounded-md p-4 flex-col flex gap-y-3'>
            
            <label className='text-sm font-bold space-x-3 text-start my-2'>
                Full Name :
            </label>
            <input name='author' className='w-2/5 p-0 bg-white outline-none border border-blue-500 rounded-sm' onChange={(e)=>{
                dispatch({
                    type:'AUTHOR',value:e.target.value
                })
            }} />
            <label className='text-sm font-bold space-x-3 text-start my-2'>
                Comment :
            </label>
            <textarea name='comment' cols='10' rows='10' className='w-2/3 p-2  bg-white outline-none border border-blue-500 rounded-sm ' onChange={(e)=>{dispatch({
                    type:'COMMENT',value:e.target.value
                })}}
            />
            <button className='text-md text-blu border border-blue-500 rounded-sm text-start w-fit' onClick={submitData}>submit</button>
            </form>
      }
    </div>
  )
}

export default Comments
