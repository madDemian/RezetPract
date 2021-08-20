import React from"react";

export const AuthContext = React.createContext({
    authenticated:false,
    setAuthenticated:() => {},

    user:null,
    setUser:()=>{},


    signIn:()=>{},
    signUp:()=>{},
    signOut:()=>{}
})



