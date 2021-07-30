import React,{useEffect} from "react";
import classes from './PostList.module.css'
import { useRouter} from "next/router";

function PostList({posts,onDelete}) {
    const router = useRouter()
    if (!posts || posts.length === 0)
        return <p>Нет данных</p>

return (
        <div>
            <table >
                <thead>
                <tr>
                    <th className={classes.name}>Posts</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map( el =>
                        <tr key={el.id} className={classes.blockOfPosts}>
                            <div className={classes.post}>
                                <p>{el.content}</p>
                                <button onClick={()=>onDelete(el.id)}>Delete</button>
                                <button onClick={()=>router.push(`/edit?id=${el.id}`)}>Edit</button>
                            </div>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default PostList