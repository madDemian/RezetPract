import React,{useState} from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";
import { useRouter} from "next/router";

export default function CreatePost(){
    const Router = useRouter()
    const [post,setPost] = useState('')
    const [title,setTitle] = useState('')

    const onSubmit =(event)=>{
        event.preventDefault()
        const apiURL = 'http://localhost:8000/api/posts/'
        axios.post(apiURL, {
            title:title,
            content:post
        }).then(function (response) {
            console.log(response);
        })
        Router.push('/posts')

    }

    return(
        <MainLayout>
            <h1>Create Post</h1>
               <form onSubmit={onSubmit}>
                   <div>
                       <div>
                           <label>Title
                               <input
                                    onChange={(event => setTitle(event.target.value))}
                                    value={title}
                                    required="required"
                               />
                           </label>
                       </div>
                       <div>
                           <label>Post
                               <input
                                   onChange={(event => setPost(event.target.value))}
                                   value={post}
                                   required="required"
                               />
                           </label>
                       </div>
                           <input type="submit" value="submit"/>
                   </div>
               </form>
        </MainLayout>
    )
}

