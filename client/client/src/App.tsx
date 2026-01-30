import './App.css'
import Navbar from './features/navbar/Navbar'
import PostList from './features/postlist/PostList'
import Sidebar from './features/sidebar/Sidebar'

function App() { 
  return (
    <>
     <Navbar></Navbar>
     <Sidebar></Sidebar>
     <PostList></PostList>
    </>
  )
}

export default App
