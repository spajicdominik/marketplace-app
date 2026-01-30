import { useEffect } from 'react';
import './App.css'
import Navbar from './features/Navbar'
import PostList from './features/PostList'

function App() {
  useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/api/posts');
            const data = await response.json();
            console.log(data);
        }   
    }, []);
    
  return (
    <>
     <Navbar></Navbar>
     <PostList></PostList>
    </>
  )
}

export default App
