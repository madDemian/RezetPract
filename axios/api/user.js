import apiClient from "../../libs/apiClient";

export const user = {
    getUser:(username)=>
        apiClient.get(`${username}`)
}