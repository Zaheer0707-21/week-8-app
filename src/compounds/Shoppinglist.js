import { useState } from "react"
const Shoppinglist= ()=>{
                  const [ list,setlist] = useState(["soap","fase wash","tooth paste","note",] )
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
                   <h2> Shoppinglist</h2>
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
 export default Shoppinglist