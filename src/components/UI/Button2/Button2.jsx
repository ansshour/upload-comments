import React from "react"
import styles from "./Button2.module.scss"

export const Button2 = ({ children }) => {
    return (
        <div className={styles.outer}>
            <p className={styles.inner}>{children}</p>
        </div>
    )
}