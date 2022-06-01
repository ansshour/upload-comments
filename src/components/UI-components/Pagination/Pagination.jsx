import styles from "./Pagination.module.scss"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Pagination = ({leftHandler, rightHandler}) => {
    return (
        <div className={styles.container}>
            <span><AiOutlineArrowLeft size="75px" onClick = {leftHandler}/></span>
            <span><AiOutlineArrowRight size="75px" onClick = {rightHandler}/></span>
        </div>
    )
}