import styles from "./DashboardArea.module.css";
import Plane from "../Plane/Plane";
import { useState } from "react";

export default function DashboardArea({ planes }) {
    const [stepValue, setStepValue] = useState(25);

    return (
        <div className={styles.dashboardsArea}>
            <div className={styles.generalConfiguration}>
                <h2>General Configurations</h2>
                <label htmlFor="stepValue">Step Values: </label>
                <input
                    type="number"
                    className="stepValue"
                    value={stepValue}
                    onChange={(e) => setStepValue(e.target.value)}
                />
            </div>
            <div className={styles.dashboards}>
                <h2>Dashboards</h2>
                {planes.map((_, index) => (
                    <Plane
                        key={index}
                        id={index}
                        dashboardSettings={{
                            stepValue,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
