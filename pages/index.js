import {useContext, useState} from "react";
import PostsList from "../components/Post/PostsList";
import MainLayout from "../components/Layout/MainLayout";
import {AuthContext} from "../context/AuthContext";
import API from '../axios/api/index'

export default function Home({posts}) {

    const [postsList, setPostList] = useState(posts)

    const {user} = useContext(AuthContext)

    const onDelete = async (id) => {
        await API.post.delete(id)
        setPostList(postsList.filter((post) => post.id !== id))
    }
    const onEdit = async (content, id) => {
        await API.post.edit(content, id)
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }

    return (
        <MainLayout>
            <PostsList  postsList={postsList} onDelete={onDelete} onEdit={onEdit} userAuthed={user}/>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const {data: {data: posts}} = await API.post.getAll()
    return {
        props: {posts},
    }
}


