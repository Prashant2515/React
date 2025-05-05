import React from 'react'
import Navbar from './Components/Navbar'
import Todolist from "./Components/Todolist";


export const App = () => {
  return (
  <>
      <Navbar/>
      <div className='.container my-5 pt-5' >
        <Todolist/>
      </div>
    </>
  )
}
export default App
