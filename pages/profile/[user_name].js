import PostsList from "../../components/Post/PostsList";
import {useContext, useState} from "react";
import CreatePostForm from "../../components/Post/CreatePostForm";
import MainLayout from "../../components/Layout/MainLayout";
import {AuthContext} from "../../context/AuthContext";
import ProfileCard from "../../components/ProfileCard";
import API from '../../axios/api/index'

export default function Profile({posts,userInfo}) {
    const [postsList, setPostList] = useState(posts)
    const {user} = useContext(AuthContext)

    const onCreate = async (text) => {
        const {data: {data: post}} = await API.post.create(text)
        setPostList([post, ...postsList])
    }
    const onDelete = async (id) => {
        await API.post.delete(id)
        setPostList(postsList.filter((post) => post.id !== id))
    }
    const onEdit = async (content, id) => {
        await API.post.edit(content, id)
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }

    return (
        <>
            <MainLayout>
                <ProfileCard user={userInfo}/>
                <CreatePostForm onCreate={onCreate}/>
                <PostsList postsList={postsList} onDelete={onDelete} onEdit={onEdit} userAuthed={user} />
            </MainLayout>
        </>
    )
}


export async function getServerSideProps(context) {
    const {data: {data:posts}} = await API.post.getAuthor(context.query.user_name)
    const {data:{data: userInfo}} = await API.user.getUser(context.query.user_name)
    return {
        props: {posts,userInfo}
    }
}