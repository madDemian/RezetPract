import classes from '../styles/sign-up.module.css'
import {useRouter} from "next/router";

function SignUpForm(){
    const router = useRouter()
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1 >Sign Up</h1>
                </div>
                <form>
                    <div className={classes.signUp}>
                        <label className={classes.inputFieldsDescr}>
                            <p>First Name</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'First name'}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Last Name</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'Last name'}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Username</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'Username'}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Email</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'Email'}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Password</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'Password'}
                               type={'password'}
                        />
                        <label className={classes.inputFieldsDescr}>
                            <p>Confirm password</p>
                        </label>
                        <input className={classes.userInput}
                               placeholder={'Password'}
                               type={'password'}
                        />
                        <button className={classes.signUpButton}>Sign Up</button>
                        <p><a className={classes.signInLink} onClick={()=>(router.push('http://localhost:3000/auth/sign-in'))}>Sign In</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUpForm
