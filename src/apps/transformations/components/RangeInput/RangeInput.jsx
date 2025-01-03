import styles from "./RangeInput.module.css";

export default function RangeInput({
    label,
    min,
    max,
    onChange,
    value,
    accentColor,
    step
}) {
    return (
        <div
            className={styles.rangeInput}
            style={{ accentColor: accentColor }}
        >
            <label htmlFor={label}>{label}</label>
            <input
                type="range"
                id={label}
                min={min}
                max={max}
                onInput={onChange}
                value={value}
                step={step}
            />
        </div>
    );
}
