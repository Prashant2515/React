import React from 'react'

const resume = ({name,contact_number,email}) => {
  return (
    <>
    <center>
        <h1>Resume</h1>
    </center>
    <p>Name: {name}</p>
    <p>Contact Number: {contact_number}</p>
    <span>Email:{email}</span>
    <hr></hr>
    <h2>Summary</h2>

    

    </>
  )
}

export default resume