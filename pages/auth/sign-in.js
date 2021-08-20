import SignInForm from "../../components/auth/SignInForm";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/authContext";

export default function SignIn(){

    const router = useRouter()
    const auth = useContext(AuthContext)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
       if(auth.authenticated){
           return router.push('/')
       }
       setLoading(false)
    },[])

    const onSignIn = auth.signIn

    return(
        <>
            { loading ?
                <div className='text-center'>Loading...</div>:
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
