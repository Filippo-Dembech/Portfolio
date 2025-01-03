import styles from "./PlaneDashboard.module.css";
import RangeInput from "../../RangeInput/RangeInput";

export default function PlaneDashboard({
    id,
    dashboardSettings,
    perspective,
    setPerspective,
    x,
    setX,
    y,
    setY,
    z,
    setZ,
    rotateX,
    setRotateX,
    rotateY,
    setRotateY,
    rotateZ,
    setRotateZ,
    opacity,
    setOpacity,
    color,
    setColor,
}) {
    return (
        <div className={styles.dashboard}>
            <h2 className={styles.index}>{id}</h2>
            <div className={styles.planeDashboard}>
                <RangeInput
                    label={`Perspective: ${perspective}`}
                    value={perspective}
                    min={0}
                    max={1000}
                    onChange={(e) => setPerspective(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <RangeInput
                    label={`X: ${x}`}
                    value={x}
                    min={-1000}
                    max={1000}
                    onChange={(e) => setX(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <RangeInput
                    label={`Y: ${y}`}
                    value={y}
                    min={-1000}
                    max={1000}
                    onChange={(e) => setY(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <RangeInput
                    label={`Z: ${z}`}
                    value={z}
                    min={-1000}
                    max={1000}
                    onChange={(e) => setZ(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />

                <RangeInput
                    label={`Rotate X: ${rotateX}`}
                    value={rotateX}
                    min={-360}
                    max={360}
                    onChange={(e) => setRotateX(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <RangeInput
                    label={`Rotate Y: ${rotateY}`}
                    value={rotateY}
                    min={-360}
                    max={360}
                    onChange={(e) => setRotateY(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <RangeInput
                    label={`Rotate Z: ${rotateZ}`}
                    value={rotateZ}
                    min={-360}
                    max={360}
                    onChange={(e) => setRotateZ(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <RangeInput
                    label={`Opacity: ${opacity}`}
                    value={opacity}
                    min={0}
                    max={255}
                    onChange={(e) => setOpacity(+e.target.value)}
                    accentColor={color}
                    step={dashboardSettings.stepValue}
                />
                <div style={{ display: "flex", alignItems: "center"}}>
                    <label htmlFor="planeColor" style={{ marginRight: "20px"}}>Plane Color</label>
                    <input type="color" id="planeColor" onChange={(e) => setColor(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}
