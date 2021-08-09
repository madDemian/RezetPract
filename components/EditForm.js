function EditForm ({onCancel,handlePostEdit,setPostContent,postContent}){

    return (
        <div>
            <form onSubmit={handlePostEdit}>
                <textarea onChange={e => setPostContent(e.target.value)} value={postContent} className='w-1/2'
                          required='required'></textarea>
                <div className="text-left space-y-0.5 space-x-0.5">
                    <button className="py-1 px-3 bg-gray-400 text-white font-bold " type="submit">Submit
                    </button>
                    <button className="py-1 px-3 bg-gray-400 text-white font-bold" onClick={onCancel}>Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm