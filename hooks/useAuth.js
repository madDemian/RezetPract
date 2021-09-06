import {useState, useEffect} from "react";
import cookie from "js-cookie";
import API from '../axios/api/index'

export function useAuth() {
    const [authenticated, setAuthenticated] = useState(!!cookie.get('token'))
    const [user, setUser] = useState(null)

    const fetchProfile = async () => {
        const {data: {data: currentUser}} = await API.auth.me()
        setUser(currentUser)
    }

    const signIn = async (credentials) => {
        try{
            const {data: {token}} = await API.auth.signIn(credentials)
            cookie.set('token', token)
            setAuthenticated(true)
        }catch (e) {
            console.log(e)
            return e.message
        }

    }

    const signUp = async (credentials) => {
        try{
            const {data: {token}} = await API.auth.signUp(credentials)
            cookie.set('token', token)
            setAuthenticated(true)
        }catch (e){
            console.log(e)
            return e.message
        }
    }

    const signOut = async () => {
        await API.auth.signOut()
        cookie.remove('token')
        setAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        if (authenticated) {
            (async () => {
                try {
                    await fetchProfile()
                } catch (e) {
                    setAuthenticated(false)
                    setUser(null)
                }
            })()
        }
    }, [authenticated])

    return {
        authenticated,
        setAuthenticated,

        user,

        signIn,
        signUp,
        signOut
    }
}