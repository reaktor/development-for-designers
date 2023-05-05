import Image from 'next/image'
import styles from "./ImageCard.module.css"

export default function ImageCard({ image, text, altText }) {
    return (
        <>
            <div>
                <Image className={styles.image} src={image}
                    alt={altText} />
                <p className={styles.text}>{text}</p>
            </div>
        </>
    )

}



