import { useState, useEffect, useRef } from "react";
import variables from "./variables.scss"
import styles from "./App.module.scss"
import { AiOutlineDatabase, AiOutlineSetting, AiOutlineSave, AiOutlineCloudDownload } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Main } from "./components/Main/Main"
import { Settings } from "./components/Settings/Settings"
import { WithComments } from "./components/Context/CommentsContext";


export function App() {

  const [token, setToken] = useState("");
  const [groupid, setGroupid] = useState("");
  const [topicid, setTopicid] = useState("");
  const [numbersOfComments, setNumbersOfComments] = useState("");
  const [isOffsetChanged, setIsOffsetChanged] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const states = { token, setToken, groupid, setGroupid, topicid, setTopicid, numbersOfComments, setNumbersOfComments, setIsOffsetChanged }
  const dataForResponse = { token, groupid, topicid, numbersOfComments, isOffsetChanged }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })

  }, [])




  return (
    <BrowserRouter>
      <WithComments>
        <div className={styles.container}>
          <div className={isScrolled ? `${styles.settings} ${styles.scrolled}` : `${styles.settings}`}>
            <ul>
              <Link to="/"><li><AiOutlineDatabase size="25px" /><p>Данные</p></li></Link>
              <Link to="/settings"><li><AiOutlineSetting size="25px" /><p>Настройки</p></li></Link>
            </ul>
          </div>
          <div className={styles.main}>
            <Routes>
              <Route path="/" element={<Main dataForResponse={dataForResponse} />} />
              <Route path="/settings" element={<Settings states={states} />} />
            </Routes>
          </div>
        </div>
      </WithComments>
    </BrowserRouter>
  );
}
