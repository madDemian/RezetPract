import * as request from '../../axios/requests'
import PostsList from "../../components/Post/PostsList";
import {useState} from "react";
import CreatePostForm from "../../components/Post/CreatePostForm";
import MainLayout from "../../components/Layout/MainLayout";

export default function Profile({posts}) {

    const [postsList, setPostList] = useState(posts)

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
    const displayedContent = postsList.length ? <PostsList postsList={postsList} onDelete={onDelete} onEdit={onEdit}/> :
        <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No
            posts</p>
    return (
        <>
            <MainLayout>
                <CreatePostForm onCreate={onCreate}/>
                {displayedContent}
            </MainLayout>
        </>
    )
}


export async function getServerSideProps(context) {
    const {data: {data: posts}} = await request.posts.getAuthorPosts(context.params.id)
    return {
        props: {posts},
    }
}