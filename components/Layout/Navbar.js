import Link from 'next/link'

const Navbar = () => {

    return (
        <div className="fixed dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-72 h-screen">
                    <nav className="mt-10 px-6 ">
                        <Link href='/'>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ">
                    <span className="mx-4 text-lg font-normal">
                        Home
                    </span>
                            <span className="flex-grow text-right">
                    </span>
                        </a>
                        </Link>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg"
                           href="#">
                    <span className="mx-4 text-lg font-normal">
                        Messages
                    </span>
                            <span className="flex-grow text-right">
                    </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                           href="#">
                    <span className="mx-4 text-lg font-normal">
                        Users
                    </span>
                            <span className="flex-grow text-right">
                    </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                           href="#">
                    <span className="mx-4 text-lg font-normal">
                        Profile
                    </span>
                            <span className="flex-grow text-right">
                    </span>
                        </a>
                        <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                           href="#">
                    <span className="mx-4 text-lg font-normal">
                        Settings
                    </span>
                            <span className="flex-grow text-right">
                    </span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar