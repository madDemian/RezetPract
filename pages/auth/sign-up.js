import SignUpForm from "../../components/auth/SignUpForm";
import {useRouter} from "next/router";
import {useState,useEffect,useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function SignUp(){

    const router = useRouter()
    const auth = useContext(AuthContext)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        if(auth.authenticated){
            return router.push('/')
        }
        setLoading(false)
    },[auth.authenticated])

    return loading ? <div className='text-center'>Loading...</div>: <SignUpForm onSignUp={auth.signUp}/>

}

export default SignUp