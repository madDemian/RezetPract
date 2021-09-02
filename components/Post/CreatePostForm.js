import {useState} from "react";

function CreatePostForm({onCreate}){
    const [content ,setContent] = useState('')

    const onSubmit =(e)=>{
        e.preventDefault()
        onCreate(content)
        setContent('')
    }
    return(
            <div className='bg-white md:w-3/12 lg:w-1/2 font-bold p-5 mx-auto border border-black'>
                <form onSubmit={onSubmit}>
                    <div className="flex items-center mb-2">
                        <textarea type="text" id="twitter" name="twitter" placeholder="Tweet"
                                  className="flex-1 py-2 border border-gray-400 text-gray-600 placeholder-gray-400"
                                  onChange={(event => setContent(event.target.value))}
                                  value={content}
                                  required="required"/>
                    </div>
                    <div className="text-right">
                        <button className="py-3 px-8 bg-blue-500 text-white font-bold" type="submit">Tweet</button>
                    </div>
                </form>
            </div>
    )
}

export default CreatePostForm