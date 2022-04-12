import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        //on Component Mount
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((resAuthors) => {
            setAuthors(resAuthors)
            console.log(resAuthors);
        })
            
    }, []);

    return (
      <div>
          <h1>Authors</h1>
          <ul>
              {authors.map((author) => 
                  <li key={author.id}> <Link to={`/authors/${author.id}`}>{author.name}</Link>  </li>
              )}
          </ul>
      </div>
    );
  }
  
  export default Home;
   