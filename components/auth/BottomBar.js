import {useRouter} from "next/router";

function BottomBar(){
    const router = useRouter()

    return (
        <div className="bg-gray-400 text-center fixed inset-x-0 bottom-0 z-20">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <p className="ml-3 font-medium text-white truncate">
                          <span>
                            Please sign in or sign up!
                          </span>
                        </p>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 flex space-x-10">
                        <button type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                onClick={()=>{router.push('http://localhost:3000/auth/sign-in')}}>
                            Sign In

                        </button>
                        <button type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                        onClick={()=>{router.push('http://localhost:3000/auth/sign-up')}}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar