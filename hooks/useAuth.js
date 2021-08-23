import {useState, useEffect} from "react";
import cookie from "js-cookie";
import * as request from '../axios/requests'
import {useRouter} from "next/router";

export function useAuth() {
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(!!cookie.get('token'))
    const [user, setUser] = useState(null)

    const fetchProfile = async () => {
        const {data:{data:currentUser}} = await request.auth.authMe()
        setUser(currentUser)
    }

    const signIn = async (credentials) => {
        const {data: {token}} = await request.auth.signIn(credentials)
        cookie.set('token', token)
        setAuthenticated(true)
        return router.push('/')

    }

    const signUp = async (credentials) => {
        const {data: {token}} = await request.auth.signUp(credentials)
        cookie.set('token', token)
        setAuthenticated(true)
        return router.push('/')
    }

    const signOut = async () => {
        await request.auth.signOut()
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

    useEffect(()=>{
        (async ()=>{
            if(authenticated){
                await fetchProfile()
            }
        })()
    },[authenticated])


    return {
        authenticated,
        setAuthenticated,

        user,

        signIn,
        signUp,
        signOut
    }
}