import {useState,useEffect} from "react";
import cookie from "js-cookie";
import * as request from '../axios/requests'
import {useRouter} from "next/router";

export function useAuth() {
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(!!cookie.get('token'))
    const [user, setUser] = useState(null)

      const signIn = async (credentials) => {
        const {data:{user,token}} = await request.auth.signIn(credentials)
        cookie.set('token',token)
        setAuthenticated(true)
        setUser(user)
        return router.push('/')
    }

    const signUp = async (credentials) => {
        const {data:{user,token}} = await request.auth.signUp(credentials)
        cookie.set('token',token)
        setAuthenticated(true)
        setUser(user)
        return router.push('/')
    }

    const signOut = async () => {
        await request.auth.signOut()
        cookie.remove('token')
        setAuthenticated(false)
        setUser(null)
    }


    return {
        authenticated,
        setAuthenticated,

        user,

        signIn,
        signUp,
        signOut
    }
}