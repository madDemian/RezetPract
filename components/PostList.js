import {useRouter} from "next/router";
import axios from "axios";
import {Post} from "./Post";

function PostList({posts}) {
    const router = useRouter()
    if (!posts || posts.length === 0)
        return <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-screen">Нет данных</p>

    const onDelete = async (id) => {
        const apiURL = `http://localhost:8000/api/posts/${id}`
        await axios.delete(apiURL)
        router.reload()
    }
    const onEdit = async (content,id) => {
        const apiURL = `http://localhost:8000/api/posts/${id}`
        await axios.put(apiURL, {
            content: content
        })
        router.reload()

    }

    const post = posts.map(post => <Post key={post.id} id={post.id} content={post.content} onDelete={onDelete} onEdit={onEdit}/>)

    return (
        <div className='flex flex-col-reverse '>{post}</div>
    )
}

export default PostList