import { useState } from "react"
function SInput() {

    //singe input
    const [fname, setname] = useState("")
    const [result, setresult] = useState("")
    function fnamechange(event) {
        setname(event.target.value)

    }
    function resultchange() {

        setresult(fname)
    }

    return (
        <>
            <input value={fname} onChange={fnamechange}></input>
            <button onClick={resultchange}>Submite</button>
            <h1> value :{result}</h1>
        </>
    )
}
export default SInput