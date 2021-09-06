import classes from '../../styles/sign-in.module.css'
import {Formik} from "formik"
import * as yup from 'yup'
import {useRouter} from "next/router"
import {useState} from "react";

function SignInForm({onSignIn}) {
    const router = useRouter()

    const [error, setError] = useState(false)

    let schema = yup.object({
        email: yup.string().typeError('Invalid email').required('Required'),
        password: yup.string().typeError('Invalid password').required('Required')
    })

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Sign In</h1>
            </div>
            <Formik initialValues={{
                email: '',
                password: ''
            }}
                    validateOnBlur
                    onSubmit={async(values) => {
                        setError(await (onSignIn(values)))
                    }}
                    validationSchema={schema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        {error && <div className='text-center text-red-500'>Invalid credentials</div>}
                        <div className={classes.login}>
                            <label className={classes.inputEmailDescr}
                                   htmlFor={'email'}>
                                <p>Username/Email</p>
                            </label>
                            <input className={classes.userEmailInput}
                                   placeholder='Email'
                                   type='email'
                                   name='email'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                            {errors.email && touched.email &&
                                <div className='text-red-500 font-bold pl-24'>
                                    {errors.email}
                                </div>

                            }
                            <label className={classes.inputPasswordDescr}
                                   htmlFor='password'>
                                <p>Password</p>
                            </label>
                            <input className={classes.userPasswordInput}
                                   placeholder='Password'
                                   type='password'
                                   name='password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                            />
                            {errors.password && touched.password &&
                                <div className='text-red-500 font-bold pl-24'>
                                    {errors.password}
                                </div>
                            }
                            <button className={classes.signInButton} type='submit'>Sign In</button>
                            <p>
                                <a className={classes.signUpLink}
                                   onClick={() => (router.push('http://localhost:3000/auth/sign-up'))}>Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm