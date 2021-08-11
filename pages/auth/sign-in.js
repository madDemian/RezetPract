import SignInForm from "../../components/SignInForm";
import cookie from 'js-cookie'

export default function SignIn(){
    const onSignIn = async ()=> {

    }
    return(
        <SignInForm onSignIn={onSignIn}/>
    )
}
