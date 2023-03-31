import styles from './BunButton.module.css';

function showBunAlert() {
    alert("Here, have a bun.")
}

export default function BunButton() {
    return (
        <button className={styles.BunButton} onClick={showBunAlert}>Gimme buns!</button>
    );
}