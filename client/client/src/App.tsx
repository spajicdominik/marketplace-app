import Featured from "./features/featured/Featured";
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
        { path: '/post/:postId', element: <PostDetailsPage/>}
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
