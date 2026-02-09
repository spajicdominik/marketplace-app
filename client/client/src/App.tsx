import { useState } from "react";
import Featured from "./features/featured/Featured";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./routes/Root";
import AuthenticationPage from "./routes/Authentication";
import Products from "./routes/Products";

function App () {
  const [isLogedIn, setLogedIn] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(1);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout isLogedIn={isLogedIn}/>,
      children: [
        { path: '/', element: <Featured/>},
        { path: '/auth', element: <AuthenticationPage />},
        { path: '/products', element: <Products currentCategory={currentCategory}/>}
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
