import axios from "axios";
import {useState} from "react";
import {Post} from "./Post";
import CreatePostForm from "../components/CreatePostForm";


function PostList({posts}) {
    const [postsList,setPostList] = useState(posts)

    if (!posts || posts.length === 0)
        return <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-screen">Нет данных</p>

    const onCreate = async(text) =>{
        const apiURL = 'http://localhost:8000/api/posts/'
        const {data} = await axios.post(apiURL, {
            content: text
        })
        setPostList([data,...postsList])
    }
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
        setPostList(postsList.map((post)=>{if(post.id === id){return {...post, content}} return post }))
    }

    return (
        <div>
            <CreatePostForm onCreate={onCreate}/>
            <div >
                {postsList.map(post => <Post key={post.id} id={post.id} content={post.content} onDelete={onDelete} onEdit={onEdit}/>)}
            </div>
        </div>
    )
}

export default PostList