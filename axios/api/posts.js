import apiClient from "../../libs/apiClient";

export const post = {
    getAll: ()=>
        apiClient.get('posts'),
    getAuthor:(username)=>
        apiClient.get(`${username}/posts`),
    edit:(content,id)=>
        apiClient.put(`posts/${id}`, {
        content
    }),
    create:(content)=>
        apiClient.post('posts',{
        content
    }),
    delete:(id)=>
        apiClient.delete(`posts/${id}`)
}