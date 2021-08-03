import React,{useState} from "react";
import axios from "axios";
import { useRouter} from "next/router";

export default function CreatePostForm(){
    const router = useRouter()
    const [text ,setText] = useState('')

    const onSubmit = async (event)=>{
        event.preventDefault()
        const apiURL = 'http://localhost:8000/api/posts/'
        await axios.post(apiURL, {
            content: text
        })
        await router.push('/')
    }
    return(
        <div className="bg-white py-32 px-10 min-h-screen ">
            <div className="bg-gray-100 p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="flex items-center mb-10">
                        <label htmlFor="twitter" className="inline-block w-20 mr-6 text-right
                                                        font-bold text-gray-600"><p>Tweet</p></label>
                        <textarea type="text" id="twitter" name="twitter" placeholder="Tweet"
                                  className="flex-1 py-2 border-b-2 border-gray-400 text-gray-600 placeholder-gray-400"
                                  onChange={(event => setText(event.target.value))}
                                                value={text}
                                                required="required"/>
                    </div>
                    <div className="text-right">
                        <button className="py-3 px-8 bg-gray-500 text-white font-bold" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

