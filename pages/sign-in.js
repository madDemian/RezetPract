import  classes from '../styles/sign-in.module.css'

export default function SignIn(){
    return(
        <div>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1 >Sign In</h1>
                </div>
                <form>
                    <div className={classes.login}>
                        <label className={classes.inputEmailDescr}>
                            <p>Username/Email</p>
                        </label>
                            <input className={classes.userEmailInput}
                                placeholder={'Email'}
                                type={'email'}
                            />
                        <label className={classes.inputPasswordDescr}>
                            <p>Password</p>
                        </label>
                        <input className={classes.userPasswordInput}
                               placeholder={'Password'}
                               type={'password'}
                        />
                        <button className={classes.signInButton}>Sign In</button>
                        <p><a className={classes.signUpLink} href={'#'}>Sign Up</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}
