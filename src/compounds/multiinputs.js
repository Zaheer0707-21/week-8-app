import { useState } from "react"
function Multiinputs() {

    const [fname, setname] = useState("")
    const [sname, ssetname] = useState("")
    const [result, setresult] = useState("")
    function fnamechange(event) {
        setname(event.target.value)

    }
    function snamechange(event) {
        ssetname(event.target.value)

    }
    function resultchange() {

        setresult(fname + " " + sname)
    }

    return (
        <>
            <span>First Name :</span>
            <input placeholder="First Name" value={fname} onChange={fnamechange}></input>
            <br />
             <span>Last Name :</span>
            <input placeholder="Last Name" value={sname} onChange={snamechange}></input>
            <br />
            <button onClick={resultchange}>Submite</button>
            <h1> Full Name : {result}</h1>
        </>
    )
}
export default Multiinputs  