import { Link } from "react-router";
import styles from './styles/HomepageLink.module.css'

export default function HomepageLink({ to, children }) {
    return (
        <li className={styles.link}>
            <Link to={`/${to}`}>{`${to} ${children || ""}`}</Link>
        </li>
    )
}