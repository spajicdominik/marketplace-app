import Header from "../features/header/Header";
import FooterPage from "../features/footer/FooterPage";
import { Outlet } from "react-router-dom";


export default function RootLayout({isLogedIn} : {isLogedIn : boolean}) {
    return (
        <>
        <Header isLogedIn = {isLogedIn}></Header>
        <Outlet></Outlet>
        <FooterPage></FooterPage>
        </>
    )
}