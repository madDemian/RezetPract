import Navbar from "./Navbar";
import Logo from "./Logo";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import UserPanel from "./UserPanel";
import BottomBar from "../auth/BottomBar";
import HomeBar from "./HomeBar";

function MainLayout({children}) {
    const auth = useContext(AuthContext)
    const [display,setDisplay] = useState(false)

    useEffect(() => {
        if (auth.authenticated) {
            setDisplay(true)
        }else{
            setDisplay(false)
        }
    }, [auth.authenticated])

    // const displayedContent =authed
    //     ? <><UserPanel onSignOut={auth.signOut} user={auth.user}/>
    //     <Navbar/></> : <BottomBar/>

    const displayContent = display?
        <>
            <Navbar/>
            <UserPanel onSignOut={auth.signOut} user={auth.user}/>
        </>:
        <>
            <HomeBar/>
            <BottomBar/>
        </>

    return (
        <div>
            <Logo/>
            {displayContent}
            {children}
        </div>
    )
}

export default MainLayout