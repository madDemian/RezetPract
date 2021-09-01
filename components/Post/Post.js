import {useState} from "react";
import EditForm from "../EditForm";
import {LikeTwoTone, MessageTwoTone} from "@ant-design/icons";
import DropdownMenu from "../Layout/Dropdown";
import Link from 'next/link'

export function Post({onDelete, onEdit, post, showContol}) {

    const [editMode, setEditMode] = useState(false)

    const onCancel = () => {
        setEditMode(false)
    }

    const showEditMode = () => {
        setEditMode(true)
    }

    const displayedContent = editMode ?
        <EditForm onCancel={onCancel}
                  onEdit={(content) => {
                      setEditMode(false)
                      onEdit(content, post.id)
                  }} content={post.content}/>
        : post.content

    const dropdown = showContol && <DropdownMenu onDelete={() => {
        onDelete(post.id)
    }} showEditMode={showEditMode}/>

    return (
        <div className='bg-white lg:w-1/2 font-bold p-5 mx-auto border-2 relative '>
            <div className='flex'>
                <img className="w-12 h-12 mr-2 rounded-full"
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg'
                     alt='profile'/>
                <span>
                        <Link href={'/profile/' + post.user.user_name}>
                            <a className='text-black'>
                                <span className='font-extrabold mr-2 cursor-pointer'>
                                    {post.user.first_name + ' ' + post.user.last_name}
                                </span>
                            </a>
                        </Link>
                        <span className='text-gray-300 space-x-3'>
                            <span>
                                   {post.user.user_name}
                            </span>
                            <span>
                                {post.created_at}
                            </span>
                        </span>
                        <p className='font-semibold pt-2'>
                                {displayedContent}
                        </p>
                    </span>
                <div className='absolute top-2 right-14'>
                    {dropdown}
                </div>
            </div>

            <div className='flex pl-14 space-x-5'>
                <div>
                    <LikeTwoTone/>
                </div>
                <div>
                    <MessageTwoTone/>
                </div>
            </div>

        </div>
    )
}