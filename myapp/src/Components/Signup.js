import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

export const Signup = () => {
    const[name,setname] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const handleSubmit=(e,name,email,password)=>
    {
         e.preventDefault() 
         if(name==""||password==""||email=="")
         {
            console.log(name,password,email)
            return false
         }
         else{
            document.getElementById("error").innerText="Mandatory"
            return true
         }
    }
  return (
    <>
        <center>
            <form action={<Navbar/>} onSubmit={handleSubmit}>
                <span id='error'></span>
                Name<input type='text'value={name} onChange={(e)=>setname(e.target.value)}/><br/>

                Email<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                Password<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <input type='submit' onSubmit={handleSubmit}/>
            </form>

        </center>
            

    </>
  )
}
export default Signup
