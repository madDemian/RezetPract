import apiClient from "../../libs/apiClient";

export const auth = {
    signIn:(credentials) =>
        apiClient.post('/login',credentials),
    signUp:(credentials)=>
        apiClient.post('/register',credentials),
    signOut:() =>
        apiClient.get('/logout'),
    me:()=>
        apiClient.get('/me')
}