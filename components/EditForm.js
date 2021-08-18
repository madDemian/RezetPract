import {useState} from "react";

function EditForm ({onCancel,onEdit,content,id}){
    const [editableContent,setEditableContent] = useState(content)
    return (
            <div>
                <textarea onChange={e => setEditableContent(e.target.value)} value={editableContent} className='w-1/2'
                          required='required'></textarea>
                <div className="text-left space-y-0.5 space-x-0.5">
                    <button className="py-1 px-3 bg-gray-400 text-white font-bold " onClick={()=>onEdit(editableContent,id)}>Save
                    </button>
                    <button className="py-1 px-3 bg-gray-400 text-white font-bold" onClick={onCancel}>Cancel
                    </button>
                </div>
            </div>
    )
}

export default EditForm