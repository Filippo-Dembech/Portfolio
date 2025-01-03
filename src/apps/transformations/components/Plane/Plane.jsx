import PlaneDashboard from "./PlaneDashboard/PlaneDashboard";
import { useState } from "react";
import PlaneItem from "./PlaneItem/PlaneItem";
import { useEvent } from "../../hooks/useEvent";

export default function Plane({ id, dashboardSettings }) {
    const [perspective, setPerspective] = useState(1000);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);
    const [color, setColor] = useState("#000000");
    const [opacity, setOpacity] = useState(100);
    const [isDragging, setIsDragging] = useState(false);

    const hexOpacity = (+`${opacity}`).toString(16);

    const configuredStyle = {
        transform: `
            translate3D(${x}px, ${y}px, ${z}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            rotateZ(${rotateZ}deg)`,
        backgroundColor: `${color}${hexOpacity}`,
    };

    useEvent(document, "mousedown", (e) => {
            if (
                [...e.target.classList].some((classItem) =>
                    classItem.includes("PlaneItem")
                ) && e.altKey
            ) {
                setIsDragging((val) => {
                    console.log("now global element dragging is true");
                    return true
                });
                e.target.style.cursor = "grabbing";
            }
    }, []);

    useEvent(document, "mousemove", (e) => {
        if (isDragging) {
            setX((x) => x + e.movementX);
            setY((y) => y + e.movementY);
        }
    }, [isDragging, setX, setY]);

    useEvent(document, "mouseup", (e) => {
        setIsDragging(false);
        e.target.style.removeProperty("cursor");
    }, []);

    return (
        <>
            <PlaneItem
                content={id}
                perspective={perspective}
                configuredStyle={configuredStyle}
                setX={setX}
                setY={setY}
                isDragging={isDragging}
            />
            <PlaneDashboard
                id={id}
                perspective={perspective}
                setPerspective={setPerspective}
                x={x}
                setX={setX}
                y={y}
                setY={setY}
                z={z}
                setZ={setZ}
                rotateX={rotateX}
                setRotateX={setRotateX}
                rotateY={rotateY}
                setRotateY={setRotateY}
                rotateZ={rotateZ}
                setRotateZ={setRotateZ}
                color={color}
                setColor={setColor}
                dashboardSettings={dashboardSettings}
                opacity={opacity}
                setOpacity={setOpacity}
            />
        </>
    );
}
