import {Post} from "./Post";

function PostsList({postsList, onDelete, onEdit, userAuthed}) {
    const displayedContent =postsList.length ? postsList.map(post => <Post key={post.id}
                                                                           post={{...post}}
                                                                           userAuthed={userAuthed}
                                                                           onDelete={onDelete}
                                                                           onEdit={onEdit}/>):
        <p className="p-1 bg-gray-50 dark:bg-gray-900 flex items-center justify-center md:w-3/12 lg:w-1/2 mx-auto">No
            posts</p>
    return displayedContent
}

export default PostsList