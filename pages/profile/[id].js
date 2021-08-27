import * as request from '../../axios/requests'
import PostsList from "../../components/Post/PostsList";
import {useContext, useState} from "react";
import CreatePostForm from "../../components/Post/CreatePostForm";
import MainLayout from "../../components/Layout/MainLayout";
import {AuthContext} from "../../context/AuthContext";
import ProfileCard from "../../components/ProfileCard";

export default function Profile({userInfo,posts}) {
    const [postsList, setPostList] = useState(posts)
    const {user} = useContext(AuthContext)

    const onCreate = async (text) => {
        const {data: {data: post}} = await request.posts.createPost(text)
        setPostList([post, ...postsList])
    }
    const onDelete = async (id) => {
        await request.posts.deletePost(id)
        setPostList(postsList.filter((post) => post.id !== id))
    }
    const onEdit = async (content, id) => {
        await request.posts.editPost(content, id)
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }
    const displayedContent = postsList.length ? <PostsList postsList={postsList} onDelete={onDelete} onEdit={onEdit} userAuthed={user} userInfo={userInfo}/> :
        <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No
            posts</p>
    return (
        <>
            <MainLayout>
                <ProfileCard user={userInfo}/>
                <CreatePostForm onCreate={onCreate}/>
                {
                    displayedContent
                }
            </MainLayout>
        </>
    )
}


export async function getServerSideProps(context) {
    const {data: {user:userInfo,posts}} = await request.posts.getAuthorPosts(context.params.id)
    return {
        props: {userInfo,posts}
    }
}