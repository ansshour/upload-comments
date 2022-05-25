import React from "react"
import styles from "./Button.module.scss"

export const Button = ({ children }) => {
    return (
        <div className={styles.outer}>
            <p className={styles.inner}>{children}</p>
        </div>
    )
}