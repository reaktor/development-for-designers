import styles from './Picture.module.css';

function Profile() {
    return (
        <img className={styles.Picture}
            src="https://images.unsplash.com/photo-1537200900027-35a21559e661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
            alt="Cinnamon Bun"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Tasty buns!</h1>
            <Profile />
        </section>
    );
}
