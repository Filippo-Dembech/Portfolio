import { useState } from "react";
import Plane from "./components/Plane/Plane";
import AddPlaneButton from "./components/AddPlaneButton/AddPlaneButton";
import DashboardArea from "./components/DashboardArea/DashboardArea";
import DisplayArea from "./components/DisplayArea/DisplayArea";

export default function ConfigurablePlanes() {
    const [planes, setPlanes] = useState([<Plane />]);

    return (
        <>
            <DashboardArea planes={planes} />
            <DisplayArea />
            <AddPlaneButton onClick={setPlanes} />
        </>
    );
}






