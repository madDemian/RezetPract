import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from "axios";
import PostList from "../components/PostList";
export default function Home({posts}) {

  return (
    <div className={styles.container}>
        <PostList posts={posts}/>
    </div>
  )

}
export async function getServerSideProps(context) {
    const apiURL = 'http://localhost:8000/api/content'
    const posts = await axios.get(apiURL)
    console.log(posts.data)
    return {
        props: {posts:posts.data},
    }
}

