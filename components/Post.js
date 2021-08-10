import {useState} from "react";
import EditForm from "./EditForm";

export function Post({id,content,onDelete,onEdit}){
    const [editMode, setEditMode] = useState(false)

    const onCancel = () =>{
        setEditMode(false)
    }

    const displayedContent = editMode ? (
        <EditForm onCancel={onCancel} onEdit={onEdit} content={content} />
    ) : (
        <p>{content}</p>
    );

    return(
        <div className="p-1 dark:bg-gray-900 flex items-center justify-center w-screen">
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
                        <span className="ml-1 text-gray-500 dark:text-gray-400 font-light"> Likes 0</span>
                    </div>
                    <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">0 comments</div>
                </div>
            </div>
        </div>
    )
}