import SignInForm from "../../components/auth/SignInForm";
import cookie from "js-cookie";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import * as request from '../../axios/requests'

export default function SignIn(){
    const router = useRouter()
    const [validToken,setValidToken] = useState(false)

    useEffect(()=>{
        if(cookie.get('token')){
            return router.push('/')
        }
        setValidToken(true)
    },[])

    const onSignIn = async (credentials)=> {
        const {data:{token}} = await request.auth.signIn(credentials)
            cookie.set('token',token)
            return router.push('/')
    }

    return(
        <>
            { validToken &&
            <SignInForm onSignIn={onSignIn}/>
            }
        </>
    )
}

export function getServerSideProps(){
    return {
        props:{}
    }
}
