import MainLayout from "../components/MainLayout";
import {useRouter} from "next/router";
import axios from "axios";
import {useState} from "react";


export default function Edit({post}){
    const router = useRouter()
    const [editedPost,setEdit] = useState(post.content)

    const editData = async () => {
        const apiURL = `http://localhost:8000/api/posts/${router.query.id}`
        await axios.put(apiURL, {
            content:editedPost
        })
        return router.push('/posts')
    }
    const onSubmit = (event) => {
        event.preventDefault()
        editData()
    }

    return(
        <div>
            <MainLayout>
                <h1>Edit your post</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <div>
                            <label>Post
                                <textarea
                                    onChange={(event => setEdit(event.target.value))}
                                                  value={editedPost}
                                                  required="required">
                                </textarea>

                            </label>
                        </div>
                        <input type="submit" value="Submit"/>
                        <button onClick={()=>router.push('/posts')}>Cancel</button>
                    </div>
                </form>
            </MainLayout>
        </div>
    )
}

export async function getServerSideProps(context) {
    const apiURL = `http://localhost:8000/api/posts/${context.query.id}`
    const {data:post} = await axios.get(apiURL)
    return {
        props: {post}
    }
}