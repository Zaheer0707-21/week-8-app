import { useState } from "react"
function Task1() {

    const [num, setnum] = useState("0")
  
    function inc() {
      setnum( +num + 1)
    }
    function dec() {
      setnum(num - 1)
    }
  
    return (
      <div>
           <h3>Task-01</h3>
        <h1>{num}</h1>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>Dec</button>
        <br/>
      </div>
    )
  }
  export default Task1
   