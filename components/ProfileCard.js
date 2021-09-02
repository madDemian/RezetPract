import pic from '../assets/pictures/home_overlay_bg-2020.jpg'
import Image from 'next/image'
import {Button} from 'antd';


function ProfileCard({profileInfo}) {
    return (
        <div className=' md:w-3/12 lg:w-1/2 mx-auto border-black border'>
            <div className='w-full h-1/2'>
                <Image className='w-full h-1/2 ' src={pic}/>
            </div>
            <div className='relative left-96 bottom-16'>
                <img className=" w-46 h-32 mr-2 rounded-full"
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg'
                     alt='profile'/>
            </div>
            <div>
                <div
                    className="relative bottom-24 font-bold ml-2">{profileInfo.first_name + ' ' + profileInfo.last_name}</div>
                <div className="relative bottom-20 font-bold ml-2 text-gray-500">{profileInfo.user_name}</div>
                <div className="relative bottom-16 font-bold ml-2 text-gray-500">Manchester,UK</div>
                <div className="flex relative bottom-14 font-bold ml-2 text-gray-500">
                    <div>
                        Followers 100
                    </div>
                    <div>
                        Followed 100
                    </div>
                </div>
                <div className='relative'>
                    <div className="flex absolute bottom-44 right-14 space-x-3  ">
                        <div>
                            <Button type="primary">Message</Button>
                        </div>
                        <div>
                            <Button type="primary">Follow</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard