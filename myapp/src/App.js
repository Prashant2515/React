import React from 'react'
import Navbar from './Components/Navbar'
import Todolist from "./Components/Todolist";
import Marksheet from './Components/Marksheet';
// import { Profile_Card } from './Components/Profile_Card';


export const App = () => {
  return (
  <>
      <Navbar/>
      <div className='.container my-5 pt-5' >
        {/* <Marksheet/> */}
        <Todolist/>
      </div>
      
    </>
  )
}
export default App
