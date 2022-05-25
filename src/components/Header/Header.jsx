import React, { useState } from "react"
import styles from "./Header.module.scss"
import { Button } from "../UI/Button/Button"
import { Button2 } from "../UI/Button2/Button2"

export const Header = () => {

    const [isOptionActive, setIsOptionActive] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const toggleOptions = () => {
        setIsOptionActive(!isOptionActive);
    }

    const inputChanger = (e) => {
        setInputValue(e.target.value)
    }



    return (
        <>
            <div className={styles.container}>
                <span onClick={toggleOptions}><Button>Настройка</Button></span>
            </div>
            <div className={isOptionActive ? `${styles.optionsWindowContainer} ${styles.activeContainer}` : `${styles.optionsWindowContainer}`}>
                <div className={isOptionActive ? `${styles.optionsWindowWrapper} ${styles.activeWindow}` : `${styles.optionsWindowWrapper}`}>
                    <form>
                        <label className={styles.label}>access token: </label>
                        <input className={styles.input} placeholder="9aed813c9ec5ebdfghg2b81db82053fc5d5d709a8d39af1d8d78z11a110d190c27235324c21e67bfdd11l" value={inputValue} onChange={inputChanger} />
                        <div className={styles.btn} onClick={() => { setAccessToken(inputValue) }}><Button2>Подтвердить</Button2></div>
                    </form>
                </div>
            </div>
        </>
    )
}