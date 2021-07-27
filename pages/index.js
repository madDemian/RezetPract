import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from "axios";
import UserData from "../components/UserData";
export default function Home() {
        const [appState,setAppState] = useState()
        useEffect(()=> {
        const apiURL = 'http://localhost:8000/api/content'
        axios.get(apiURL).then((response) => {
            const allPosts = response.data;
            setAppState(allPosts)
        });
        },[setAppState])
  return (
    <div className={styles.container}>
        <UserData appState = {appState}/>
    </div>
  )
}
