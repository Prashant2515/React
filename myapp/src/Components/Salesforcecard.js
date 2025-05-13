import React from 'react'
import './Salesforce.css'

export default function Salesforcecard(props) {
  return (
    <>
        <div className='container my-5 py-10 --bs-body-color'>
            <div>
                <img src={props.companyLogo} alt='Company logo' className='companyLoge img-fluid'style={{height:"200px", width:"200px"}}/>
                <img src={props.techLogo} alt='Tech logo'  style={{height:"200px", width:"200px",position:"relative",left:"850px",top:"25px"}}/>
            </div>
            <h2 className='h1tag'>{props.companyName}</h2>
            <div>
                <p><span>Profile/Client:</span></p>
                <p className='props'>{props.projectName}</p>
                <p><span>Role:</span></p>
                <p className='props'>{props.roleDetails}</p>
                <p><span>Responsibilities:</span></p>
                <p className='props'>{props.responsibilities}</p>
                <p><span>Tech Skills</span></p>
                <p className='props'>{props.techSkill}</p>
                <p><span>Achievements</span></p>
                <p className='props'>{props.Achievements}</p>

            </div>
            
        </div>
    </>
  )
}
