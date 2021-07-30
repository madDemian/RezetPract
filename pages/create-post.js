import React,{useState} from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";
import { useRouter} from "next/router";

export default function CreatePost(){
    const Router = useRouter()
    const [text ,setText] = useState('')

    const postData = async () => {
        const apiURL = 'http://localhost:8000/api/posts/'
            await axios.post(apiURL, {
                content: text
            })
            return Router.push('/posts')

    }
    const onSubmit =(event)=>{
        event.preventDefault()
        postData()
    }

    return(
        <MainLayout>
            <h1>Create Post</h1>
               <form onSubmit={onSubmit}>
                   <div>
                       <div>
                           <label>Post
                               <input
                                   onChange={(event => setText(event.target.value))}
                                   value={text}
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

