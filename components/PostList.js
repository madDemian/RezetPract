import {useState} from "react";
import CreatePostForm from "../components/CreatePostForm";
import apiClient from '../axios.config'
import ListOfPosts from "./ListOfPosts";

function PostList({posts}) {

    const [postsList,setPostList] = useState(posts || [])

    const onCreate = async(text) =>{
        const {data:post} = await apiClient.post('posts', {
            content: text
        })
        setPostList([post,...postsList])
    }
    const onDelete = async (id) => {
        await apiClient.delete(`posts/${id}`)
        setPostList(postsList.filter((post)=>post.id !== id))
    }
    const onEdit = async (content,id) => {
        await apiClient.put(`posts/${id}`, {
            content: content
        })
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }
    const displayedContent = postsList.length ? <ListOfPosts postsList={postsList} onDelete={onDelete} onEdit={onEdit}/> :
        <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No posts</p>

    return (
        <div>
            <CreatePostForm onCreate={onCreate}/>
            <div >
                {
                    displayedContent
                }
            </div>
        </div>
    )
}

export default PostList