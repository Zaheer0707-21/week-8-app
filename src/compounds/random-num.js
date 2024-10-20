import { useState } from "react"


   function Random(){
     
      var [number,Setnum] = useState(0)

        
       function random(){
                
         Setnum( number = Math.floor(Math.random()*10)+1)
       }
        
      
       
       return(
            <div>
                 <h1> Random Numbers</h1>
             <h1>{number}</h1>
             <button onClick={random}>Random number</button>
            </div>
         
       )
    
   }


 export default Random
           