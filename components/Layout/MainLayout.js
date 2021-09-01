import Navbar from "./Navbar";
import Logo from "./Logo";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext";
import UserPanel from "./UserPanel";
import BottomBar from "../auth/BottomBar";

function MainLayout({children}) {
    const auth = useContext(AuthContext)


    useEffect(() => {
        if (auth.authenticated) {
            auth.setAuthenticated(true)
        }else{
            auth.setAuthenticated(false)
        }
    }, [auth.authenticated])

    const displayedContent = auth.authenticated
        ? <><UserPanel onSignOut={auth.signOut} user={auth.user}/>
        <Navbar/></> : <BottomBar/>

    return (
        <div>
            <Logo/>
            {
                displayedContent
            }
            {children}
        </div>
    )
}

export default MainLayout