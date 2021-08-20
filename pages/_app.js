import '../styles/index.css'
import {AuthContext} from "../context/AuthContext";
import {useAuth} from "../hooks/useAuth";

function MyApp({Component, pageProps}) {
    const auth = useAuth()
    return (
        <AuthContext.Provider value={auth}>
            <Component {...pageProps} />
        </AuthContext.Provider>
    )
}

export default MyApp
