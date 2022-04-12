
function Comment({commentData}){

    return(
        <li key={commentData.id}>
            <h3>Commenter Name: {commentData.name}</h3>
            <p>{commentData.body}</p>
        </li>
    )
}

export default Comment;