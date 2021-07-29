import classes from './PostList.module.css'


function PostList({posts}) {
    if (!posts || posts.length === 0) return <p>Нет данных</p>

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
                                <p>{el.title}</p>
                                <p>{el.content}</p>
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