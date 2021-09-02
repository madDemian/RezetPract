import Navbar from "./Navbar";
import Logo from "./Logo";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import UserPanel from "./UserPanel";
import BottomBar from "../auth/BottomBar";
import HomeBar from "./HomeBar";

function MainLayout({children,title,numberOfPosts}) {
    const auth = useContext(AuthContext)
    const [display,setDisplay] = useState(false)

    useEffect(() => {
        if (auth.authenticated) {
            setDisplay(true)
        }else{
            setDisplay(false)
        }
    }, [auth.authenticated])

    useEffect(()=>{},[])

    const displayContent = display?
        <div>
            <Navbar/>
            <UserPanel onSignOut={auth.signOut} user={auth.user}/>
        </div>:
        <div>
            <HomeBar/>
            <BottomBar/>
        </div>

    return (
        <div>
            <Logo title={title} numberOfPosts={numberOfPosts}/>
            {displayContent}
            {children}
        </div>
    )
}

export default MainLayout