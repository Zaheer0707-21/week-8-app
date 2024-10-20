import { useState } from "react"

 
  const  Task3=()=>{

       const [iname ,iset] = useState("")
     
         const handle=(evt)=>{
               iset(evt.target.value)
         }      
        
       return(
                  <>
                     <h3>Task-03</h3>
                  <span>Enter Name : </span>
                  <input  value={iname}  onChange={handle} placeholder="Your Name"></input>
                  <h1> Name is : {iname} </h1>
                  </>
       )
  }


   export default Task3