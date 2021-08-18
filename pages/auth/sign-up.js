import SignUpForm from "../../components/auth/SignUpForm";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import cookie from "js-cookie";
import * as request from '../../axios/requests'


export default function SignUp(){
    const router = useRouter()

    const [validToken,setValidToken] = useState(false)

    useEffect(()=>{
        if(cookie.get('token')){
            return router.push('/')
        }
        setValidToken(true)
    },[])

    const onSignUp = async (credentials)=> {
        const {data:{token}} = await request.auth.signUp(credentials)
        cookie.set('token',token)
        return router.push('/')
    }

    return(
        <>
            {validToken &&
            <SignUpForm onSignUp={onSignUp}/>}
        </>
    )
}

export function getServerSideProps (){
    return {
        props:{}
    }
}