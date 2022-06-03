import styles from "./Card.module.scss"
import { BiX } from "react-icons/bi";

export const Card = ({ name, photo, commentText, profileLink, deleteEl, id }) => {

    return (
        <div className={styles.container}>
            <span className={styles.x} onClick={(e) => {deleteEl(id)}}><BiX /></span>
            <div className={styles.firstEl}>
                <a href={profileLink} target="_blank" ><img className={styles.photo} src={photo} width="100px"/></a>
                <p className={styles.name}>Имя: {name}</p>
            </div>
            <div>
                <p>{commentText}</p>
            </div>
        </div>
    )
}