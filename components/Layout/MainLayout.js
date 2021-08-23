import Navbar from "./Navbar";
import IconProfile from "./IconProfile";
import RegistrationLoginWindow from "../auth/RegistrationLoginWindow";
import Logo from "./Logo";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function MainLayout({children}) {
    const auth = useContext(AuthContext)

    const onSignOut = async () => {
        await auth.signOut()
    }


    return (
        <div>
            <Logo/>
            <IconProfile onSignOut={onSignOut}/>
            <Navbar/>
            <RegistrationLoginWindow/>
            {children}
        </div>
    )
}

export default MainLayout