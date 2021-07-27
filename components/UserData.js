import React from "react";
import classes from './UserData.module.css'
function UserData(props) {

    const { appState } = props
    if (!appState || appState.length === 0) return <p>Нет данных</p>

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
                    appState.map((el) =>
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

export default UserData