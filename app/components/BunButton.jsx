import styles from './BunButton.module.css';

export default function BunButton() {
    return (
        <button className={styles.BunButton} onClick={() => alert("Here, have a bun.")}>Gimme buns!</button>
    );
}