import styles from './Button.module.css';

export default function Button() {
    return (
        <button className={styles.Button} onClick={() => alert("Here, have a bun.")}>Gimme buns!</button>
    );
}