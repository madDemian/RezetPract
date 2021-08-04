import {useState} from "react";

export function Post({id,content,onDelete,onEdit}){
    const [postContent,setPostContent] = useState(content)

    const [editMode, setEditMode] = useState(false)

    const handlePostEdit = (e) => {
        e.preventDefault()
        onEdit(postContent,id)
        setEditMode(false)
    }

    const displayedContent = editMode ? (
        <div>
            <form onSubmit={handlePostEdit}>
            <textarea onChange={e => setPostContent(e.target.value)} value={postContent}></textarea>
                <div className="text-left">
                    <button className="py-1 px-3 bg-gray-400 text-white font-bold" type="submit">Submit
                    </button>
                </div>
            </form>
        </div>
    ) : (
        <p>{content}</p>
    );

    return(
        <div className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-screen">
            <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg w-3/6">
                <div className="flex mb-4">
                    <img className="w-12 h-12 rounded-full" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg'/>
                    <div className="ml-2 mt-0.5">
                        <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">User</span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">Time posted</span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">email</span>
                    </div>
                    <div >
                        <button className='inset-y-0 left-20 w-16'
                                onClick={()=>onDelete(id)}>Delete</button>
                        <button className='inset-y-0 right-0 w-16'
                                onClick={()=>setEditMode(true)}>Edit</button>
                    </div>
                </div>

                <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">{displayedContent}</p>

                <div className="flex justify-between items-center mt-5">
                    <div className="flex ">
                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light"> Likes 0</span>
                    </div>
                    <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">0 comments</div>
                </div>
            </div>
        </div>
    )
}