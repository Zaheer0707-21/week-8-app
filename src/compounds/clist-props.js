import { useState } from "react"
   function Listitem(props){
    const [setcheck, changecheck] = useState(false)
    const handlecheck = () => {
      changecheck(!setcheck)
    }
  
     return(
        <>
        <div>
         <input onChange={handlecheck} type="checkbox"></input>
        <span style={{ textDecoration: setcheck ? "line-through" : "none" }}>{props.activities}</span>
        </div>
        </>
     )
   }






 export default Listitem