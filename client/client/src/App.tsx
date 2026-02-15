import Featured from "./features/featured/Featured";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./routes/Root";
import AuthenticationPage from "./routes/Authentication";
import Products from "./routes/Products";
import NewPost from "./routes/NewPost";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import RegisterDone from "./routes/RegisterDone";
import UploadSuccess from "./routes/UploadSuccess";

function App() {
 const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <Featured /> },
        { path: '/auth', element: <AuthenticationPage /> },
        { path: '/products', element: <Products /> },
        {
          path: '/newPost', element: <ProtectedRoute />, children: [
            { path: '', element: <NewPost /> }
          ]
        },
        { path: '/register-done', element: <RegisterDone/>},
        { path: '/upload-success', element: <UploadSuccess/>}
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
