import { useState } from 'react'
import './App.css'
import Navbar from './features/navbar/Navbar'
import PostList from './features/postlist/PostList'
import Sidebar from './features/sidebar/Sidebar'

function App() { 
  const [selectProductId, setSelectedProductId] = useState<number | null>(null);

  return (
    <>
     <Navbar></Navbar>
     <div className='flex'>
        <Sidebar onSelectProduct={setSelectedProductId}></Sidebar>
        <PostList productId={selectProductId}></PostList>
     </div>
    </>
  )
}

export default App
