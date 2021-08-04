import axios from "axios";
import {useState} from "react";
import {Post} from "./Post";

function PostList({posts}) {
    const [postsList,setPostList] = useState(posts)

    if (!posts || posts.length === 0)
        return <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-screen">Нет данных</p>

    const onDelete = async (id) => {
        const apiURL = `http://localhost:8000/api/posts/${id}`
        await axios.delete(apiURL)
        setPostList(postsList.filter((post)=>post.id !== id))
    }
    const onEdit = async (content,id) => {
        const apiURL = `http://localhost:8000/api/posts/${id}`
        await axios.put(apiURL, {
            content: content
        })
        setPostList(postsList.filter((post)=>{if(post.id === id){post.content = content} return true }))

    }

    return (
        <div className='flex flex-col-reverse '>
            {postsList.map(post => <Post key={post.id} id={post.id} content={post.content} onDelete={onDelete} onEdit={onEdit}/>)}
        </div>
    )
}

export default PostList