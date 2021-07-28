import React from "react";
import classes from './PostList.module.css'


function PostList({posts}) {
    if (!posts || posts.length === 0) return <p>Нет данных</p>

    return (
        <div>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th className={classes.name}>Posts</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((el) =>
                        <tr className={classes.blockOfPosts}>
                            <td className={classes.post}>{el.content}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default PostList