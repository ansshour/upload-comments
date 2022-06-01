import { useEffect, useState } from "react"
import axios from 'axios'
import { Card } from "./Card/Card"
import styles from "./Main.module.scss"
// import { Pagination } from "../UI-components/Pagination/Pagination"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Main = ({ dataForResponse }) => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    let id = 0;

    const deleteEl = (id) => {
        delete data[id];
        const newData = data;
        setData(newData)
    }


    useEffect(() => {
        const getData = (offset) => {
            setLoading(true)
            try {
                if (dataForResponse.token.length === 0) {
                    dataForResponse.token = localStorage.getItem("token");
                }
                if (dataForResponse.groupid.length === 0) {
                    dataForResponse.groupid = localStorage.getItem("groupid");
                }
                if (dataForResponse.topicid.length === 0) {
                    dataForResponse.topicid = localStorage.getItem("topicid");
                }
                if (!dataForResponse.isOffsetChanged) {
                    dataForResponse.numbersOfComments = localStorage.getItem("numbersOfComments")
                }


                axios.post("http://localhost:4000/getcomments", {
                    dataForResponse,
                    offset
                }).then((response => {
                    const data = []
                    try {
                        const items = response.data.response.items;
                        const profiles = response.data.response.profiles;
                        items.forEach(item => {
                            profiles.forEach(profile => {
                                if (item.from_id === profile.id) {
                                    const dataObj = { id: id, name: `${profile.first_name} ${profile.last_name}`, photo: profile.photo_100, profileLink: `https://vk.com/id${profile.id}`, commentText: item.text }
                                    data.push(dataObj)
                                    id++;
                                }
                            })
                        })
                        setData(data)
                        setLoading(false);
                    } catch(err) {}
                }))
                    .catch (err => console.log("error"))
            } catch (err) { }
        }
getData(offset)
    }, [offset])


if (loading) {
    return (
        <Box sx={{ display: 'flex', width: "100%", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress size="100px" />
        </Box>
    )
}

return (
    <div className={styles.card__container}>
        {(data.map(data => <Card name={data.name} photo={data.photo} commentText={data.commentText} key={data.id} profileLink={data.profileLink} id={data.id} deleteEl={deleteEl} />))}
        <Stack spacing={2} style={{ marginBottom: "20px" }}>
            <Pagination count={parseInt(dataForResponse.numbersOfComments / 100)} shape="rounded" onChange={(_, num) => setOffset(num * 100)} page={offset === 0 ? 1 : Math.round(offset / 100)} />
        </Stack>
    </div>
)
}