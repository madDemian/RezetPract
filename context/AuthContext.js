import React from"react";

export const AuthContext = React.createContext({
    authenticated:false,
    setAuthenticated:() => {},

    user:null,
    setUser:()=>{},

    fetchProfile:()=>{},

    signIn:()=>{},
    signUp:()=>{},
    signOut:()=>{}
})



