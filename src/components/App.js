
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Author from './Author';
import Post from './Post';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/authors/:id" element={<Author/>} />
      <Route path="/posts/:postID" element={<Post/>} />
    </Routes>
    
  );
}

export default App;
