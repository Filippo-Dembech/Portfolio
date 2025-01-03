import { useEffect, useRef, useState } from "react";
import styles from "./PlaneItem.module.css";

export default function PlaneItem({
    content,
    perspective,
    setX,
    setY,
    isDragging,
    configuredStyle,
}) {
    const [isLocalDragging, setIsLocalDragging] = useState(false);

    const planeItemRef = useRef(null);

    useEffect(() => {
        function eventHandler(e) {
            if (
                [...e.target.classList].some((classItem) =>
                    classItem.includes("PlaneItem")
                ) &&
                !e.altKey
            ) {
                setIsLocalDragging((val) => {
                    console.log("now local dragging is true");
                    return true;
                });
                e.target.style.cursor = "grabbing";
            }
        }

        planeItemRef.current.addEventListener("mousedown", eventHandler);
        return () => {
            planeItemRef.current.removeEventListener("mousedown", eventHandler);
        };
    }, [isDragging]);

    useEffect(() => {
        function eventHandler(e) {
            if (isLocalDragging) {
                setX((x) => x + e.movementX);
                setY((y) => y + e.movementY);
            }
        }

        planeItemRef.current.addEventListener("mousemove", eventHandler);
        return () => {
            planeItemRef.current.removeEventListener("mousemove", eventHandler);
        };
    }, [isLocalDragging, setX, setY]);

    useEffect(() => {
        function eventHandler(e) {
            setIsLocalDragging(false);
            e.target.style.removeProperty("cursor");
        }

        planeItemRef.current.addEventListener("mouseout", eventHandler);
        return () => {
            planeItemRef.current.removeEventListener("mouseout", eventHandler);
        };
    }, []);

    useEffect(() => {
        function eventHandler(e) {
            setIsLocalDragging(false);
            e.target.style.removeProperty("cursor");
        }

        planeItemRef.current.addEventListener("mouseup", eventHandler);
        return () => {
            planeItemRef.current.removeEventListener("mouseup", eventHandler);
        };
    }, []);

    return (
        <div
            className={styles.reference}
            style={{ perspective: `${perspective}px` }}
        >
            <div
                ref={planeItemRef}
                className={styles.plane}
                style={configuredStyle}
            >
                {content}
            </div>
        </div>
    );
}
