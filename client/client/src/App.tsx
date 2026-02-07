import Header from "./features/header/Header";
import { useState } from "react";
import Featured from "./features/featured/Featured";
import Footer from "./features/footer/Footer";

function App () {
  const [isLogedIn, setLogedIn] = useState(true);

  return (
    <>
    <Header isLogedIn = {isLogedIn}></Header>
    <Featured></Featured>
    <Footer></Footer>
    </>
  );
}

export default App;
