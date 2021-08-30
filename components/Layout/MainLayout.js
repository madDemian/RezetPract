import Navbar from "./Navbar";
import IconProfile from "./IconProfile";
import RegistrationLoginWindow from "../auth/RegistrationLoginWindow";
import Logo from "./Logo";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";

function MainLayout({children}) {
    const auth = useContext(AuthContext)
    const [authed, setAuthed] = useState(false)

    useEffect(() => {
        if (auth.authenticated) {
            setAuthed(true)
        }else{
            setAuthed(false)
        }
    }, [auth.authenticated])

    const displayedContent = authed
        ? <><IconProfile onSignOut={auth.signOut} user={auth.user}/>
        <Navbar/></> : <RegistrationLoginWindow/>

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