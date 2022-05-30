import { useState, useEffect } from "react";
import variables from "./variables.scss"
import styles from "./App.module.scss"
import { AiOutlineDatabase, AiOutlineSetting } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Main } from "./components/Main/Main"
import { Settings } from "./components/Settings/Settings"


export function App() {

  const [token, setToken] = useState("");
  const [groupid, setGroupid] = useState("");
  const [topicid, setTopicid] = useState("");
  const [numbersOfComments, setNumbersOfComments] = useState("");


  const states = { token, setToken, groupid, setGroupid, topicid, setTopicid, numbersOfComments, setNumbersOfComments }
  const dataForResponse = { token, groupid, topicid, numbersOfComments }

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <div className={styles.settings}>
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
    </BrowserRouter>
  );
}
