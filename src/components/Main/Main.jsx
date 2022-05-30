import { useEffect, useState } from "react"
import axios from 'axios'
import { Card } from "./Card/Card"
import styles from "./Main.module.scss"

export const Main = ({ dataForResponse }) => {

    const [data, setData] = useState({});

    // useEffect(() => {
    //     // axios.get(`http://localhost:4000/getcomments?token=${dataForResponse.token}?groupid=${dataForResponse.groupid}?topicid=${dataForResponse.topicid}`)
    //     //     .then(data => setData(data))
    //     axios.get(`http://localhost:4000/getcomments?token=affcbe28affcbe28affcbe28f1af8093d3aaffcaffcbe28cda5eec549103f80693eb82a?groupid=91324690?topicid=32070492`)
    //         .then(data => console.log(data))
    // }, [])

    return (
        <div className={styles.card__container}>
            <Card />
        </div>
    )
}