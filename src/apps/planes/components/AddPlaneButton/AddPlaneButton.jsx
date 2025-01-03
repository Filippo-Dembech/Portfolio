import styles from './AddPlaneButton.module.css';
import Plane from '../Plane/Plane';

export default function AddPlaneButton( { onClick }) {
    return (
        <button className={styles.addPlaneButton} onClick={() => {
            onClick((planes) => [...planes, <Plane />])
        }}>+</button>
    )
}