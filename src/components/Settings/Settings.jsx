import styles from "./Settings.module.scss";
import { Button } from "../UI-components/Button/Button"

export const Settings = ({ states }) => {

    return (
        <div className={styles.container}>
            <form>
                <div>
                    <label>Введите token:</label>
                    <input type="text" name="token" placeholder="affcdfghjaffge28afdfbe22d1af4943d3ffafcaffcbe28cda5elc529123f88693ad82b" value={states.token} onChange={(e) => { states.setToken(e.target.value) }} />
                </div>
                <div className={styles.groupId}>
                    <label>Введите id группы:</label>
                    <input type="text" name="groupid" placeholder="91324690" value={states.groupid} onChange={(e) => { states.setGroupid(e.target.value) }} />
                </div>
                <div className={styles.topicId}>
                    <label>Введите id обсуждения:</label>
                    <input type="text" name="topicid" placeholder="32070492" value={states.topicid} onChange={(e) => { states.setTopicid(e.target.value) }} />
                </div>
                <div className={styles.topicId}>
                    <label>Количество сообщений в обсуждении:</label>
                    <input type="text" name="numbersOfComments" placeholder="1000" value={states.numbersOfComments} onChange={(e) => { states.setNumbersOfComments(e.target.value) }} />
                </div>
                <Button>Сохранить настройки</Button>
            </form>
        </div>
    )
}