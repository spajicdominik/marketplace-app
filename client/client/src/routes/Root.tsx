import Header from "../features/header/Header";
import FooterPage from "../features/footer/FooterPage";
import { Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col">
        <Header></Header>
        <Outlet></Outlet>
        <FooterPage></FooterPage>
        </div>
    )
}