import {Post} from "./Post";

function PostsList({postsList,onDelete,onEdit}){
        return postsList.map(post => <Post key={post.id} id={post.id} content={post.content}  email={post.user.email} name={[post.user.first_name+' '+post.user.last_name]} created={post.created_at} onDelete={onDelete} onEdit={onEdit} />)
}

export default PostsList