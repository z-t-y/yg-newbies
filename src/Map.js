import Navbar from "./Navbar"

export default function Map() {
    document.title = "简要地图"
    return (<>
        <Navbar />
        <div className="custom-container">
            <img src="map.jpg" style={{ width: "100%", height: "auto" }} alt="map" />
        </div>
    </>)
}