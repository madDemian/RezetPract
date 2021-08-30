import classes from '../../styles/sign-up.module.css'
import {useRouter} from "next/router";
import {useState} from "react";

function SignUpForm({onSignUp}){
    const router = useRouter()

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirmation,setPasswordConfirmation] = useState('')

    const inputForm = {
        first_name:firstName,
        last_name:lastName,
        user_name:userName,
        email:email,
        password:password,
        password_confirmation:passwordConfirmation
    }

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    onSignUp(inputForm)
                }}>
                    <div className={classes.signUp}>
                        <label className={classes.inputFieldsDescr}>
                            <p>First Name</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'First name'}
                               name='first_name'
                               required='required'
                               onChange={event => {setFirstName(event.target.value)}}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Last Name</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'Last name'}
                               name='last_name'
                               required='required'
                               onChange={event => {setLastName(event.target.value)}}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Username</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder='Username'
                               name='user_name'
                               required='required'
                               onChange={event => {setUserName(event.target.value)}}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Email</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder='Email'
                               name='email'
                               type='email'
                               required='required'
                               onChange={event => {setEmail(event.target.value)}}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Password</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder='Password'
                               name='password'
                               type='password'
                               required='required'
                               onChange={event => {setPassword(event.target.value)}}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Confirm password</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder='Confirm password'
                               name='password_confirmation'
                               type='password'
                               required='required'
                               onChange={event => {setPasswordConfirmation(event.target.value)}}
                        />
                        <button className={classes.signUpButton} type='submit'>Sign Up</button>
                        <p><a className={classes.signInLink} onClick={()=>(router.push('http://localhost:3000/auth/sign-in'))}>Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
