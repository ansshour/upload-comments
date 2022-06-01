import styles from "./Settings.module.scss";

export const Settings = ({ states }) => {

    return (
        <div className={styles.container}>
            <form>
                <div>
                    <label>Введите token:</label>
                    <input type="text" name="token" placeholder="affcdfghjaffge28afdfbe22d1af4943d3ffafcaffcbe28cda5elc529123f88693ad82b" value={states.token || localStorage.getItem("token")} onChange={(e) => { states.setToken(e.target.value); localStorage.setItem("token", e.target.value) }} />
                </div>
                <div className={styles.groupId}>
                    <label>Введите id группы:</label>
                    <input type="text" name="groupid" placeholder="91324690" value={states.groupid || localStorage.getItem("groupid")} onChange={(e) => { states.setGroupid(e.target.value); localStorage.setItem("groupid", e.target.value) }} />
                </div>
                <div className={styles.topicId}>
                    <label>Введите id обсуждения:</label>
                    <input type="text" name="topicid" placeholder="32070492" value={states.topicid || localStorage.getItem("topicid")} onChange={(e) => { states.setTopicid(e.target.value); localStorage.setItem("topicid", e.target.value) }} />
                </div>
                <div className={styles.topicId}>
                    <label>Количество сообщений в обсуждении:</label>
                    <input type="text" name="numbersOfComments" placeholder="1000" value={localStorage.getItem("numbersOfComments")} onChange={(e) => {states.setNumbersOfComments(e.target.value); localStorage.setItem("numbersOfComments", e.target.value); states.setIsOffsetChanged(true) }} />
                </div>
            </form>
        </div>
    )
}