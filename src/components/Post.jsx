
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Comment from './Comment';



function Post(){
    const postID = useParams().postID;
    const [post, setPost] = useState()
    const [comments, setComments] = useState()
    useEffect(()=>{
        //On Mount:
        console.log(postID);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then((res) => res.json()).then((resPost) => {
            setPost(resPost)
            console.log("post", resPost);
        })
        
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`).then((res) => res.json()).then((resComments) => {
            setComments(resComments)
            console.log("Comments",resComments);
        })

    }, [])

    function getPostRenderInfo(){
        return(
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    }

    function getCommentsRenderInfo(){
        return(
            <div>
                <h2>Comments:</h2>
                <ul>
                    {comments.map((comment) => <Comment commentData={comment} />)}
                </ul>
            </div>
        )
    }

    function getRenderDetails(){
        return(
            <>
                {post && getPostRenderInfo()}
                {comments && getCommentsRenderInfo()}
            </>
        )
    }

    return(getRenderDetails())
}


export default Post;