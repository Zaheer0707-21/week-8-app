import { useState } from "react"


function Hide(){
          
      const [show , hide] = useState(false)
        
       const handle=()=>{
              hide(!show)
       }
    return(
      <div>
             <h3> Task - 02</h3>
            <button onClick={handle}>click</button>
            <h1>
              {
                   show? "": " Hello guys"
              }
            </h1>
       </div>
    )
 }
  export default Hide