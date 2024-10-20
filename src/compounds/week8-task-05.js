import { useState } from "react"
const Task5= ()=>{
                  const [ list,setlist] = useState([] )
                  const [item,setitem] = useState("")

               const itemsetting =(evt)=>{
                     setitem(evt.target.value)
               }
             const addlist=()=>{
                  setlist([...list,item])
                  setitem(" ")
             }
                 
             return(
                 <>
                    <h3>Task-05</h3>
                      <input value={item} onChange={itemsetting}></input>
                      <button onClick={addlist}>add</button>
                      <ul>
                            {list.map(function(mlist){
                                   return(
                                        <li>{mlist}</li>
                                   )
                            })}
                           
                      </ul>
                 </>
             )


 }
 export default Task5