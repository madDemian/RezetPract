import axios from "axios";
import {useState} from "react";
import {Post} from "./Post";
import CreatePostForm from "../components/CreatePostForm";


function PostList({posts}) {

    const [postsList,setPostList] = useState(posts)

    const onCreate = async(text) =>{
        const apiURL = 'http://localhost:8000/api/posts/'
        const {data:post} = await axios.post(apiURL, {
            content: text
        })
        setPostList([post,...postsList])
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
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }

    return (
        <div>
            <CreatePostForm onCreate={onCreate}/>
            {
                !postsList || postsList.length === 0 ?
                <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No posts</p> : ''
            }
            <div >
                {
                    postsList.map(post => <Post key={post.id} id={post.id} content={post.content} onDelete={onDelete} onEdit={onEdit}/>)
                }
            </div>
        </div>
    )
}

export default PostList