function ProfileCard({user}){
    return (
        <div className="md:w-3/12 lg:w-1/2 mx-auto">
            <div>
                <div className="rounded-lg shadow-lg bg-gray-600 w-full flex p-3 antialiased"
                     style={{
                         backgroundSize: "cover",
                         backgroundBlendMode: "multiply"
                     }}>
                    <div className="md:w-1/4 w-full">
                        <img className="rounded-lg shadow-lg antialiased"
                             src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                        <div className='flex ml-0'>
                            <button
                                className='mr-2 bg-gray-400 text-white  text-gray-900
                             group flex rounded-md items-center px-2 py-2 text-sm hover:bg-gray-500 '>Follow
                            </button>
                            <button
                                className='bg-gray-400 text-white  text-gray-900
                             group flex rounded-md items-center px-2 py-2 text-sm hover:bg-gray-500 '>Message
                            </button>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full -px-20 flex flex-row flex-wrap">
                        <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                            <div className="text-2xl text-white leading-tight">{user.first_name+' '+user.last_name}</div>
                            <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">asd<span
                                className="border-gray-500 pb-1">{user.user_name}</span></div>
                            <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer"><span
                                className="border-gray-500 pb-1">Manchester,UK</span></div>
                            <div
                                className="flex text-sm text-gray-300  md:absolute pt-3 md:pt-0 bottom-0 right-0">
                                <p className='mr-3 hover:text-gray-400 cursor-pointer'>Following 1000</p><p className='hover:text-gray-400 cursor-pointer'> Followers 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard