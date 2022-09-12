import Navbar from "./Navbar"

export default function Scenery() {
    return (<>
        <Navbar />
        <div className="custom-container scenery">
            <img src="1.jpg" alt="1" />
            <img src="2.jpg" alt="2" />
            <img src="3.jpg" alt="3" />
            <img src="4.jpg" alt="4" />
            <img src="5.jpg" alt="5" />
        </div>
    </>)
}