function Logo({title = 'Explore', numberOfPosts}) {

    return (
        <div className='bg-white md:w-3/12 lg:w-1/2 font-bold p-5 mx-auto border border-black'>
            <div>{title}</div>
            <div className='text-gray-300'>{numberOfPosts} </div>
        </div>
    )

}

export default Logo