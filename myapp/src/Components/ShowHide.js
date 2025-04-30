import { useState } from "react";

function Showhide()
{
    const [show,setShow] = useState(false);
    const handleShow=()=>
    {

        setShow(true);
       
    }
    // function handleShow()
    // {
    //     setShow(true);
    // }
    const handleHide=()=>
    {
        setShow(false);
        // alert(setShow);
    }
    return(
        <>
        {show && <p>Press Button to Hide:</p>}
        {/* <p> {show}Press Button to hide</p> */}
        <button onClick={handleHide}>Hide</button>
        <button onClick={handleShow}>Show</button>
        </>
    )
}

export default Showhide;