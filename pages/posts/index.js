import axios from "axios";
import styles from './Index.module.css'
import PostList from "../../components/PostList";
import MainLayout from "../../components/MainLayout";


export default function Index({posts}){
    return(
        <MainLayout>
            <PostList posts={posts}/>
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const apiURL = 'http://localhost:8000/api/posts'
    const {data:posts} = await axios.get(apiURL)
    return {
        props: {posts},
    }
}

