import { useEffect, useState } from "react"
import axios from 'axios'
import { Card } from "./Card/Card"
import styles from "./Main.module.scss"

export const Main = ({ dataForResponse }) => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        if (dataForResponse.token.length === 0) {
            dataForResponse.token = localStorage.getItem("token");
        }
        if (dataForResponse.groupid.length === 0) {
            dataForResponse.groupid = localStorage.getItem("groupid");
        }
        if (dataForResponse.topicid.length === 0) {
            dataForResponse.topicid = localStorage.getItem("topicid");
        }
        axios.post("http://localhost:4000/getcomments", {
            dataForResponse,
            offset
        }).then((response => {
            const data = []
            const items = response.data.response.items;
            const profiles = response.data.response.profiles;
            items.forEach(item => {
                profiles.forEach(profile => {
                    if (item.from_id === profile.id) {
                        const dataObj = { name: `${profile.first_name} ${profile.last_name}`, photo: profile.photo_100, profileLink: `https://vk.com/id${profile.id}`, commentText: item.text }
                        data.push(dataObj)
                    }
                })
            })
            setData(data)
        }))
            .catch(err => console.log("error"))
    }, [])

    return (
        <div className={styles.card__container}>
            {data.map(data => <Card name={data.name} photo={data.photo} commentText={data.commentText} profileLink={data.profileLink} />)}
        </div>
    )
}