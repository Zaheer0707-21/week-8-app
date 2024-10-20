import { useState } from "react"
const Colourchanging = () => {
    const [setcolour, changecolor] = useState(false)
    const colorhandling = () => {
        changecolor(!setcolour)
    }
    return (
        <>
            <div style={{ backgroundColor: setcolour ? "red" : "black", height: "100px", width: "100px" }}></div>
            <button onClick={colorhandling}>Change</button>
        </>
    )
}
export default Colourchanging