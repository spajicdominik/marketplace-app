import Navbar from "../features/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    )
}