import { useState } from "react"

function Addinginputs() {



    const [fname, setname] = useState("")
    const [sname, ssetname] = useState("")
    const [result, setresult] = useState("Adding two numbers")
    function fnamechange(event) {
        setname(+event.target.value)

    }
    function snamechange(event) {
        ssetname(+event.target.value)

    }
    function resultchange() {

        setresult(fname + sname)
    }

    return (
        <>

            <input type="number" value={fname} onChange={fnamechange}></input>
            <br />
            <input type="number" value={sname} onChange={snamechange}></input>
            <br />
            <button onClick={resultchange}>Submite</button>
            <h1>{result}</h1>
        </>
    )
}

export default Addinginputs