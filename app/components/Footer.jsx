import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.div}>
                <p>This is a footer!</p>
                <p><a href='/'>Front page</a></p>
                </div>
        </footer>
    )
}