import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./routes/Root";
import AuthenticationPage from "./routes/Authentication";
import Products from "./routes/Products";
import NewPost from "./routes/NewPost";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import RegisterDone from "./routes/RegisterDone";
import UploadSuccess from "./routes/UploadSuccess";
import Profile from "./routes/Profile";
import Main from "./routes/Main";
import PostDetailsPage from "./routes/PostDetailsPage";
import UserDetailsPage from './routes/UserDetailsPage';
import TestSocket from './routes/TestSocket';
import EditPost from './routes/EditPost';
import DeletionSuccess from './routes/DeletionSuccess';

function App() {
 const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Main/> },
        { path: '/auth', element: <AuthenticationPage /> },
        { path: '/products', element: <Products /> },
        {
          path: '/newPost', element: <ProtectedRoute />, children: [
            { path: '', element: <NewPost /> }
          ]
        },
        { path: '/register-done', element: <RegisterDone/>},
        { path: '/upload-success', element: <UploadSuccess/>},
        { path: '/profile', element: <Profile/>},
        { path: '/post/:postId', element: <PostDetailsPage/>},
        { path: '/users/:userId', element: <UserDetailsPage/>},
        { path: "/edit-post/:postId", element: <EditPost/>},
        { path: "deletion-success", element: <DeletionSuccess/>}
      ]
    }
])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
