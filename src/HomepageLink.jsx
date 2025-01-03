import { Link } from "react-router";
import styles from './HomepageLink.module.css'

export default function HomepageLink({ to }) {
    return (
        <li className={styles.link}>
            <Link to={`/${to}`}>{to}</Link>
        </li>
    )
}