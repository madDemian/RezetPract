import apiClient from "../libs/apiClient";

export const posts = {
    getAllPosts() {
        return apiClient.get('posts')
    },

    getAuthorPosts(id){
        return apiClient.get(`${id}/posts`)
    },

    editPost(content,id){
        return apiClient.put(`posts/${id}`, {
            content: content
        })
    },

    createPost(text){
        return apiClient.post('posts',{
            content:text
        })
    },

    deletePost(id){
        return apiClient.delete(`posts/${id}`)
    }
}

export const user = {
    getUsers(id) {
        return apiClient.get('/posts/'+id)
    }
}

export const auth = {

    signIn(credentials) {
        return apiClient.post('/login',credentials)
    },
    signUp(credentials){
       return apiClient.post('/register',credentials)
    },
    signOut(){
        return apiClient.get('/logout')
    },
    authMe(){
        return apiClient.get('/authMe')
    }
}