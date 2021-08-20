import {useContext, useState} from "react";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import RegistrationLoginWindow from "../components/auth/RegistrationLoginWindow";
import * as request from '../axios/requests'
import SignOut from "../components/auth/SignOut";
import {AuthContext} from "../context/AuthContext";
import {useRouter} from "next/router";

export default function Home({posts}) {

    const router = useRouter()
    const auth = useContext(AuthContext)
    const [postsList, setPostList] = useState(posts)

    const onCreate = async (text) => {
        const {data: post} = await request.posts.createPost(text)
        setPostList([post, ...postsList])
    }
    const onDelete = async (id) => {
        await request.posts.deletePost(id)
        setPostList(postsList.filter((post) => post.id !== id))
    }
    const onEdit = async (content, id) => {
        await request.posts.editPost(content,id)
        setPostList(postsList.map(post => post.id === id ? {...post, content} : post))
    }

    const onSignOut = async () => {
        await auth.signOut()
    }

    const displayedContent = postsList.length ? <PostsList postsList={postsList} onDelete={onDelete} onEdit={onEdit}/> :
        <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No
            posts</p>

    return (
        <div>
            <RegistrationLoginWindow />
            <SignOut onSignOut={onSignOut}/>
            <CreatePostForm onCreate={onCreate}/>
            <div>
                {
                    displayedContent
                }
            </div>
        </div>
    )
}

export async function getServerSideProps (){
    const {data: posts} = await request.posts.getAllPosts()
    return {
        props: {posts},
    }
}

