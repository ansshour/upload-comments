import styles from "./Card.module.scss"

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.firstEl}>
                <p className={styles.name}>Имя: Андрей Жуков</p>
                <img className={styles.photo} src="https://www.meme-arsenal.com/memes/6132549b7f85a1f25e58dc16a159acfe.jpg" width="250px" />
            </div>
            <div>
                <p>Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой! Магазин крутой!  </p>
            </div>
        </div>
    )
}