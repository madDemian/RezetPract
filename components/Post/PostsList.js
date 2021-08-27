import {Post} from "./Post";

function PostsList({postsList, onDelete, onEdit, userAuthed,userInfo}) {

    return postsList.map(post => <Post key={post.id}
                                       post={{...post}}
                                       userAuthed={userAuthed}
                                       user={userInfo}
                                       onDelete={onDelete} onEdit={onEdit}/>)
}

export default PostsList