import  classes from '../../styles/sign-in.module.css'
import {useRouter} from "next/router";
import {useState} from "react";

function SignInForm({onSignIn}){
    const router = useRouter()
    const [formInput,setFormInput] = useState({email:'',password:''})
    const updateFormInput = e => {
        e.persist()
        setFormInput(prevState =>({...prevState,[e.target.name]:e.target.value}))
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
                               onChange={updateFormInput}

                        />
                        <label className={classes.inputPasswordDescr}>
                            <p>Password</p>
                        </label>
                        <input className={classes.userPasswordInput}
                               placeholder='Password'
                               type='password'
                               name='password'
                               required='required'
                               onChange={updateFormInput}
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