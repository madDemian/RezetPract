function SignOut({onSignOut}){
    return(
        <button className='flex align-bottom' onClick={()=>{onSignOut()}}>SignOut</button>
    )
}

export default SignOut