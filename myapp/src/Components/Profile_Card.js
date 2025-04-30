import React,{useState} from 'react'


export const Profile_Card = () => {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[bio,setBio]=useState("");
    const[show,setShow]=useState("");

    const handleSubmit = (e)=>
    {   e.preventDefault()
        setShow(
        <>
            hello!! My is {name} <br/>
            and my age is {age}<br/>
            read my bio {bio}<br/>
        </>
            
        );
        
            
    };

  return (
    <>
        <center>
            <form onSubmit={handleSubmit}>
                <h3 style={{color:"red"}}>Profile Card</h3>
                Name <input type='text'  value={name} onChange={(e) => setName(e.target.value)}/><br/>
                Age <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/><br/>
                Bio <input type='text' value={bio} onChange={(e)=>setBio(e.target.value)}/><br/>
                <button type='submit'>Submit </button>
            </form>
            <p>{show}</p>

            
           
        </center>
    </>
  )
}
