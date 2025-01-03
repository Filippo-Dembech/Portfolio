import { Link } from "react-router";
import styles from "./Homepage.module.css";
import HomepageLink from "./HomepageLink";

export default function Homepage() {
    
    const titleName = (
        <span className={styles.name}>Filippo Dembech</span>
    )

    return (
        <main className={styles.homepage}>
            <h1 className={styles.title}>
                <div>Welcome to</div>
                <div>{titleName}</div>
                <div>Portfolio</div>
            </h1>
            <p className={styles.description}>What can I do? Click one of the link below to see one of my projects:</p>
            <ul className={styles.projectsList}>
                <HomepageLink to="planes"/>
                <HomepageLink to="sample"/>
                <HomepageLink to="test"/>
            </ul>
        </main>
    );
}
