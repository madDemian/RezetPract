import {Menu, Transition} from '@headlessui/react'
import {Fragment, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/AuthContext";

export default function IconProfile({onSignOut}) {
    const auth = useContext(AuthContext)

    const [displayWindow,setDisplayWindow] = useState("fixed bottom-0 left-72")

    useEffect(()=>{
        if(!auth.authenticated){
            setDisplayWindow('hidden')
        }else{
            setDisplayWindow("fixed bottom-0 left-72")
        }
    },[auth.authenticated])
    return (
        <div className={displayWindow}>
            <Menu as="div" className="relative inline-block text-left ">
                <div>
                    <Menu.Button className="inline-flex justify-center px-4 ">
                        <div className="flex -space-x-1 overflow-hidden">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg'
                                alt=""
                            />

                        </div>

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute -top-20 w-24 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={`${
                                            active ? 'bg-gray-400 text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-0 py-0 text-sm`}

                                    >
                                        {active ? (
                                            <EditActiveIcon
                                                className="w-5 h-5 mr-2"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <EditInactiveIcon
                                                className="w-5 h-5 mr-2"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Profile
                                    </button>
                                )}
                            </Menu.Item>
                        </div>

                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={`${
                                            active ? 'bg-gray-400 text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-0 py-0 text-sm`}
                                        onClick={()=>{onSignOut()}}
                                    >
                                        {active ? (
                                            <DeleteActiveIcon
                                                className="w-5 h-5 mr-2 text-violet-400"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <DeleteInactiveIcon
                                                className="w-5 h-5 mr-2 text-violet-400"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <div>{[auth.user?.first_name+' '+auth.user?.last_name]}</div>
        </div>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2"/>
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2"/>
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2"/>
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2"/>
        </svg>
    )
}
