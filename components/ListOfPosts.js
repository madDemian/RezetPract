import {Post} from "./Post";

function ListOfPosts({postsList,onDelete,onEdit}){
        return postsList.map(post => <Post key={post.id} id={post.id} content={post.content} onDelete={onDelete} onEdit={onEdit}/>)
}

export default ListOfPosts