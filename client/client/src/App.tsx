import { useState } from "react";
import Featured from "./features/featured/Featured";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./routes/Root";
import AuthenticationPage from "./routes/Authentication";
import Products from "./routes/Products";

function App () {
  const [isLogedIn, setLogedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout isLogedIn={isLogedIn}/>,
      children: [
        { path: '/', element: <Featured/>},
        { path: '/auth', element: <AuthenticationPage />},
        { path: '/products', element: <Products/>}
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
