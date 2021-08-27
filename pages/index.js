import {useContext, useState} from "react";
import PostsList from "../components/Post/PostsList";
import * as request from '../axios/requests'
import MainLayout from "../components/Layout/MainLayout";
import {AuthContext} from "../context/AuthContext";

export default function Home({posts}) {

    const [postsList, setPostList] = useState(posts)

    const {user} = useContext(AuthContext)

    const onDelete = async (id) => {
        await request.posts.deletePost(id)
        setPostList(postsList.filter((post) => post.id !== id))
    }
    const onEdit = async (content, id) => {
        await request.posts.editPost(content, id)
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }

    const displayedContent = postsList.length ? <PostsList  postsList={postsList} onDelete={onDelete} onEdit={onEdit} userAuthed={user}/> :
        <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No
            posts</p>

    return (
        <MainLayout>
            {
                    displayedContent
            }
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const {data: {data: posts}} = await request.posts.getAllPosts()
    return {
        props: {posts},
    }
}

