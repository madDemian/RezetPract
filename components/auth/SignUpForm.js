import classes from '../../styles/sign-up.module.css'
import {useRouter} from "next/router";
import {useState} from "react";
import {Formik} from "formik"
import * as yup from 'yup'

function SignUpForm({onSignUp}) {
    const router = useRouter()

    const [error, setError] = useState(false)

    let schema = yup.object({
        email: yup.string().typeError('Invalid email').required('Required'),
        first_name: yup.string().typeError('Should be a string').required('Required'),
        last_name: yup.string().typeError('Should be a string').required('Required'),
        user_name: yup.string().typeError('Should be a string').required('Required'),
        password: yup.string().typeError('Invalid password').required('Required'),
        password_confirmation: yup.string().oneOf([yup.ref('password')], 'Password are not the same').required('Required'),
    })

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>Sign Up</h1>
                </div>
                <Formik initialValues={{
                    email: '',
                    first_name:'',
                    last_name:'',
                    user_name:'',
                    password: '',
                    password_confirmation:''
                }}
                        validateOnBlur
                        onSubmit={async(values) => {
                            setError(await onSignUp(values))
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
                        <div className={classes.signUp}>

                            <label className={classes.inputFieldsDescr}
                                   htmlFor={'first_name'}>
                                <p>First Name</p>
                            </label>
                            <input className={classes.userInput}
                                   placeholder={'First name'}
                                   name='first_name'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.first_name}
                            />
                            {errors.first_name && touched.first_name ?
                                <div className='text-red-500 font-bold pl-24'>
                                    { errors.first_name}
                                </div>
                                :null
                            }

                            <label className={classes.inputFieldsDescr}
                                   htmlFor={'last_name'}>
                                <p>Last Name</p>
                            </label>
                            <input className={classes.userInput}
                                   placeholder={'Last name'}
                                   name='last_name'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.last_name}
                            />
                            {errors.last_name && touched.last_name ?
                                <div className='text-red-500 font-bold pl-24'>
                                    { errors.last_name}
                                </div>
                                :null
                            }

                            <label className={classes.inputFieldsDescr}
                                   htmlFor={'user_name'}>
                                <p>Username</p>
                            </label>
                            <input className={classes.userInput}
                                   placeholder='Username'
                                   name='user_name'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.user_name}
                            />
                            {errors.user_name && touched.user_name ?
                                <div className='text-red-500 font-bold pl-24'>
                                    { errors.user_name}
                                </div>
                                :null
                            }

                            <label className={classes.inputFieldsDescr}
                                   htmlFor={'email'}>
                                <p>Email</p>
                            </label>
                            <input className={classes.userInput}
                                   placeholder='Email'
                                   name='email'
                                   type='email'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            />
                            {errors.email && touched.email ?
                                <div className='text-red-500 font-bold pl-24'>
                                    { errors.email}
                                </div>
                                :null
                            }

                            <label className={classes.inputFieldsDescr}
                                   htmlFor={'password'}>
                                <p>Password</p>
                            </label>
                            <input className={classes.userInput}
                                   placeholder='Password'
                                   name='password'
                                   type='password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                            />
                            {errors.password && touched.password ?
                                <div className='text-red-500 font-bold pl-24'>
                                    { errors.password}
                                </div>
                                :null
                            }

                            <label className={classes.inputFieldsDescr}
                                   htmlFor={'password_confirmation'}>
                                <p>Confirm password</p>
                            </label>
                            <input className={classes.userInput}
                                   placeholder='Confirm password'
                                   name='password_confirmation'
                                   type='password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password_confirmation}
                            />
                            {errors.password_confirmation && touched.password_confirmation ?
                                <div className='text-red-500 font-bold pl-24'>
                                    { errors.password_confirmation}
                                </div>
                                :null
                            }

                            <button className={classes.signUpButton} type='submit'>Sign Up</button>
                            <p><a className={classes.signInLink}
                                  onClick={() => (router.push('http://localhost:3000/auth/sign-in'))}>Sign In</a></p>
                        </div>
                    </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUpForm
