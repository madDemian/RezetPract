import  classes from '../../styles/sign-in.module.css'
import {useRouter} from "next/router";
import {useState} from "react";

function SignInForm({onSignIn}){
    const router = useRouter()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const formInput = {
        email:email,
        password:password
    }
    return(
        <div>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>Sign In</h1>
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    onSignIn(formInput)
                }}>
                    <div className={classes.login}>
                        <label className={classes.inputEmailDescr}>
                            <p>Username/Email</p>
                        </label>
                        <input className={classes.userEmailInput}
                               placeholder='Email'
                               type='email'
                               name='email'
                               required='required'
                               onChange={event => setEmail(event.target.value)}

                        />
                        <label className={classes.inputPasswordDescr}>
                            <p>Password</p>
                        </label>
                        <input className={classes.userPasswordInput}
                               placeholder='Password'
                               type='password'
                               name='password'
                               required='required'
                               onChange={event => setPassword(event.target.value)}
                        />
                        <button className={classes.signInButton} type='submit'>Sign In</button>

                        <p><a className={classes.signUpLink} onClick={()=>(router.push('http://localhost:3000/auth/sign-up'))}>Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm