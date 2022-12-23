import React, { useState } from 'react'
const RegisterLogin = ({setFound,found}) => {
    const [isregister,setIsregister]=useState(found)
    const [userInfo,setUserInfo]=useState({
        username:'',password:''
    })
    const [loginInputs,setLoginInputs]=useState({
        username:'',
        password:''
    })
     

    const submit=async (e)=>{
        e.preventDefault()
        console.log(userInfo)
        if(isregister){
        fetch('http://localhost:400/data',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userInfo)
        }).then(()=>{
            console.log('is submitted')
        })
        setIsregister(false)
        setUserInfo({
            username:'',
            password:''
        })
    }else{
            const data= await fetch('http://localhost:400/data');
            const res=await data.json()
            console.log(loginInputs)
            const isFound=res.map(item=>item.username===loginInputs.username && item.password===loginInputs.password)
            setFound(isFound.length !==0)
        }

        
    }
  return (

        <div>
        <div className='h-[100vh] w-full flex justify-center items-center'>
      <div className='border border-blue-500  h-13 w-[320px] p-3 grid grid-cols-1 items-center gap-2 '>
        <h1 className='text-center text-4xl text-blue-600 font-bold'>
            {
isregister ? 'Register' :'Login'
            }
        </h1>
        <label className='text-md text-start text-blue-500'>
            username
        </label>
        <input name={userInfo.username} placeholder='username' type='text' className='border border-1 border-slate-600 p-2 w-[200px] outline-none' onChange={(e)=>{
           isregister ? setUserInfo({
                ...userInfo,username:e.target.value
            } ): setLoginInputs({
                ...loginInputs,username:e.target.value
            })
        }}></input>
        <label className='text-md text-start text-blue-500'>
            password
        </label>
       
        <input name={userInfo.password} placeholder='password' type='text' className='border border-1 border-slate-600 p-2 w-[200px] outline-none' onChange={(e)=>{
            isregister ? setUserInfo({...userInfo,password:e.target.value})
            : setLoginInputs({
                ...loginInputs,password:e.target.value
            })
        }}></input>
      <button className='border border-blue-500 p-1 w-fit my-2 text-blue-600 hover:text-white hover:bg-blue-500' onClick={submit}>submit</button>
      </div>
      
    </div>
    </div>

    
    
  )
}

export default RegisterLogin

