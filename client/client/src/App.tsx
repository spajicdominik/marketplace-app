import { useState } from 'react'
import './App.css'
import Navbar from './features/navbar/Navbar'
import PostList from './features/postlist/PostList'
import Sidebar from './features/sidebar/Sidebar'

function App() { 
  const [selectProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  return (
    <>
     <Navbar></Navbar>
     <div className='flex'>
        <Sidebar onSelectProduct={setSelectedProductId} onSelectCategory={setSelectedCategoryId}></Sidebar>
        <PostList productId={selectProductId} categoryId={selectCategoryId}></PostList>
     </div>
    </>
  )
}

export default App
