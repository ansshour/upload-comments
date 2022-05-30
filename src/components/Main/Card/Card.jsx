import styles from "./Card.module.scss"

export const Card = ({ name, photo, commentText, profileLink }) => {
    return (
        <div className={styles.container}>
            <div className={styles.firstEl}>
                <a href={profileLink}><img className={styles.photo} src={photo} width="100px" target="_blank" /></a>
                <p className={styles.name}>Имя: {name}</p>
            </div>
            <div>
                <p>{commentText}</p>
            </div>
        </div>
    )
}