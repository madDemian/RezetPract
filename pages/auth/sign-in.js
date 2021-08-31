import SignInForm from "../../components/auth/SignInForm";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";

export default function SignIn(){

    const router = useRouter()
    const auth = useContext(AuthContext)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
       if(auth.authenticated){
           return router.push('/')
       }
       setLoading(false)
    },[auth.authenticated])



    return  loading ? <div className='text-center'>Loading...</div> : <SignInForm onSignIn={auth.signIn}/>
}

export async function getStaticProps() {
    return {
        props: {}
    }
}
