
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Author() {
    const authorID = useParams().id;
    const [author, setAuthor] = useState()
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        //On Mount:
        console.log(authorID);

        fetch(`https://jsonplaceholder.typicode.com/users/${authorID}`).then((res) => res.json()).then((resAuthor) => {
            //setAuthors(resAuthor)
            setAuthor(resAuthor)
            console.log(resAuthor);
        })
        
        fetch(`https://jsonplaceholder.typicode.com/users/${authorID}/posts`).then((res) => res.json()).then((resPosts) => {
            //setAuthors(resAuthor)
            setPosts(resPosts)
            console.log(resPosts);
        })
    }, [])


    function getPostsDetails(){
        return(
            <div>
                <h1>Posts:</h1>
                <ul>
                    {posts.map((post) => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li> )}
                </ul>
            </div>

        )
    }

    function getAuthorDetails(){
        return(
            <div>
                <h1>Author Details</h1>
                <h2>{author.name}</h2>
                <h3>City: {author.address.city}</h3>
                <h3>Company: {author.company.name}</h3>
                <h3>Phone: {author.phone}</h3>
                <h3>Website: <a href={author.website}>{author.website}</a></h3>
                <h3><Link to={"/authors"}>Posts</Link></h3>
            </div>
        )
    }

    function getRenderDetails(){
        return(
            <>
                {author && getAuthorDetails()}
                {posts && getPostsDetails()}
            </>
        )
    }

    return (
        getRenderDetails()
        
    )
}

export default Author;
