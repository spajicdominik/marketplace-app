import { useState } from 'react'
import './App.css'
import Navbar from './features/navbar/Navbar'
import PostList from './features/postlist/PostList'
import Sidebar from './features/sidebar/Sidebar'

function App() { 
  const [selectProductId, setSelectedProductId] = useState<number | 0>(0);
  const [selectCategoryId, setSelectedCategoryId] = useState<number | 0>(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);

  return (
    <>
     <Navbar></Navbar>
     <div className='flex'>
        <Sidebar onSelectProduct={setSelectedProductId} onSelectCategory={setSelectedCategoryId} onSelectMinPrice={setMinPrice} onSelectMaxPrice={setMaxPrice}></Sidebar>
        <PostList productId={selectProductId} categoryId={selectCategoryId} minPrice={minPrice} maxPrice={maxPrice}></PostList>
     </div>
    </>
  )
}

export default App
