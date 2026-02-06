import './App.css'
import Shop from './routes/Shop';
import Settings from './routes/Settings';
import Sell from './routes/Sell';
import Profile from './routes/Profile';
import Featured from './routes/Featured';
import AuthenticationPage from './routes/Authentication';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/Root';
import ErrorPage from './routes/Error';
import Post from './routes/Post';

import { action as authAction } from './routes/Authentication';

function App() { 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        { path: '/featured', element: <Featured/>},
        { path: '/shop', element: <Shop/>},
        { path: '/shop/:postId', element: <Post></Post>},
        { path: '/settings', element: <Settings/>},
        { path: '/sell', element: <Sell/>},
        { path: '/profile', element: <Profile/>},
        { path: '/auth', element: <AuthenticationPage/>, action: authAction}
      ]
    }
  ]);

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
