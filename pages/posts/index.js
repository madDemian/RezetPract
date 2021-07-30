import axios from "axios";
import PostList from "../../components/PostList";
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";


export default function Index({posts}){
    const router = useRouter()
    const  onDelete = async (id) => {
        try{
            const apiURL = `http://localhost:8000/api/posts/${id}`
            await axios.delete(apiURL)
            router.reload()
        }catch (err){
            console.error(err)
        }
    }

    return(
        <MainLayout>
            <PostList posts={posts}
                      onDelete={onDelete}
            />
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

